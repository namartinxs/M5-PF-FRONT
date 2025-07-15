module.exports = {
  types: [
    { value:  'feat', name: '✨ feat:     Nova funcionalidade' },
    { value: 'fix', name: '🐛 fix:      Correção de bug' },
    { value: 'docs', name: '📚 docs:     Apenas mudanças na documentação' },
    { value: 'style', name: '💄 style:    Mudanças de estilo' },
    { value: 'refactor', name: '♻️ refactor: Refatoração de código' },
    { value: 'perf', name: '⚡ perf:     Melhoria de performance' },
    { value: 'test', name: '🧪 test:     Adição de testes' },
    { value: 'chore', name: '🔧 chore:    Tarefas de manutenção' }
  ],
  scopes: [],
  allowCustomScopes: false,
  messages: {
    type: "📦 Tipo de alteração:",
    subject: "📝 Descrição curta:",
    confirmCommit: "🚀 Confirma o commit acima?"
  },
  skipQuestions: ['body', 'breaking', 'footer', 'scope'],
}
