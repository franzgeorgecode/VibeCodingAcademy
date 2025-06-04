import hljs from 'highlight.js';

export function renderMarkdown(markdown: string): string {
  // Split into lines and process each paragraph
  const lines = markdown.split('\n');
  let html = '';
  let inCodeBlock = false;
  let codeContent = '';
  let codeLanguage = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Handle code blocks
    if (line.startsWith('```')) {
      if (!inCodeBlock) {
        inCodeBlock = true;
        codeLanguage = line.slice(3).trim();
        codeContent = '';
      } else {
        // End of code block
        const highlighted = codeLanguage && hljs.getLanguage(codeLanguage)
          ? hljs.highlight(codeContent, { language: codeLanguage }).value
          : codeContent;
        html += `<pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4"><code class="text-sm">${highlighted}</code></pre>`;
        inCodeBlock = false;
      }
      continue;
    }

    if (inCodeBlock) {
      codeContent += line + '\n';
      continue;
    }

    // Handle headings
    if (line.startsWith('# ')) {
      html += `<h1 class="text-3xl font-bold mb-4 text-gray-900">${line.slice(2)}</h1>`;
    } else if (line.startsWith('## ')) {
      html += `<h2 class="text-2xl font-semibold mb-3 text-gray-800">${line.slice(3)}</h2>`;
    } else if (line.startsWith('### ')) {
      html += `<h3 class="text-xl font-semibold mb-2 text-gray-700">${line.slice(4)}</h3>`;
    }
    // Handle lists
    else if (line.startsWith('- ')) {
      html += `<ul class="list-disc list-inside mb-4 space-y-1"><li class="text-gray-700">${line.slice(2)}</li></ul>`;
    }
    // Handle numbered lists
    else if (/^\d+\.\s/.test(line)) {
      html += `<ol class="list-decimal list-inside mb-4 space-y-1"><li class="text-gray-700">${line.replace(/^\d+\.\s/, '')}</li></ol>`;
    }
    // Handle paragraphs
    else if (line.trim()) {
      html += `<p class="text-gray-700 mb-4 leading-relaxed">${line}</p>`;
    }
  }

  return html;
}