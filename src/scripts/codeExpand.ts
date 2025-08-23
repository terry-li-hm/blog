export function initCodeExpand() {
  if (window.innerWidth > 768) return;

  document.addEventListener('DOMContentLoaded', () => {
    const codeBlocks = document.querySelectorAll('.post-content pre');
    
    codeBlocks.forEach(element => {
      const pre = element as HTMLPreElement;
      const code = pre.querySelector('code');
      if (!code) return;
      
      // Count lines
      const lines = code.textContent?.split('\n').length || 0;
      
      // If more than 15 lines, make it collapsible
      if (lines > 15) {
        pre.setAttribute('data-lines', lines.toString());
        pre.style.maxHeight = '20rem';
        pre.style.overflow = 'hidden';
        pre.style.cursor = 'pointer';
        pre.style.position = 'relative';
        
        // Create expand button
        const expandBtn = document.createElement('div');
        expandBtn.className = 'code-expand-btn';
        expandBtn.innerHTML = `
          <span class="expand-text">Show all ${lines} lines</span>
          <span class="collapse-text" style="display:none">Collapse</span>
        `;
        expandBtn.style.cssText = `
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 0.5rem;
          background: linear-gradient(to top, var(--code-bg) 70%, transparent);
          text-align: center;
          font-size: 0.75rem;
          color: var(--text-secondary);
          cursor: pointer;
          user-select: none;
        `;
        
        pre.appendChild(expandBtn);
        
        let expanded = false;
        
        const toggleExpand = () => {
          expanded = !expanded;
          if (expanded) {
            pre.style.maxHeight = 'none';
            (expandBtn.querySelector('.expand-text') as HTMLElement).style.display = 'none';
            (expandBtn.querySelector('.collapse-text') as HTMLElement).style.display = 'inline';
            expandBtn.style.background = 'var(--code-bg)';
            expandBtn.style.borderTop = '1px solid var(--border)';
            expandBtn.style.position = 'sticky';
          } else {
            pre.style.maxHeight = '20rem';
            (expandBtn.querySelector('.expand-text') as HTMLElement).style.display = 'inline';
            (expandBtn.querySelector('.collapse-text') as HTMLElement).style.display = 'none';
            expandBtn.style.background = 'linear-gradient(to top, var(--code-bg) 70%, transparent)';
            expandBtn.style.borderTop = 'none';
            expandBtn.style.position = 'absolute';
            // Scroll back to pre element
            pre.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        };
        
        expandBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          toggleExpand();
        });
      }
    });
  });
}