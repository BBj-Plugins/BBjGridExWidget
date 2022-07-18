(function (Prism) {
  Prism.languages.BBj = Prism.languages.extend("clike", {
    'comment': [
      {
        pattern: /(^|[^\\:])rem\s+.*/i,
        lookbehind: true,
        greedy: true
      }
    ],
    keyword:
      /\b(?:abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while|class|classend|extends|implements|method|methodend|methodret|interface|interfaceend|protected|public|private|void|static|use|declare|auto|field|if|then|else|endif|fi|while|wend|for|to|step|next|switch|case|swend|new)\b/i,
    operator: {
      pattern:
        /(^|[^.])(?:\+[+=]?|-[-=]?|!=?|<<?=?|>>?>?=?|==?|&[&=]?|\|[|=]?|\*=?|\/=?|%=?|\^=?|[?:~])/m,
      lookbehind: true,
    },
  });

  Prism.languages.insertBefore("BBj", "function", {
    annotation: {
      alias: "punctuation",
      pattern: /(^|[^.])@\w+/,
      lookbehind: true,
    },
  });
})(Prism);