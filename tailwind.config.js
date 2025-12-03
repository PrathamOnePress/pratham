module.exports = {
  content: ["./app/**/*.{js,ts,tsx,jsx}", "./components/**/*.{js,ts,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        "bg-primary": "var(--bg-primary)",
        "bg-secondary": "var(--bg-secondary)",
        "bg-card": "var(--bg-card)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
        "brand-primary": "var(--brand-primary)",
        "brand-accent": "var(--brand-accent)",
        "silver": "var(--silver)",
        "border": "var(--border-color)"
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        hard: "var(--shadow-hard)"
      }
    }
  },
  plugins: []
};