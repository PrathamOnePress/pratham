export default function Footer() {
  return (
    <footer className="bg-bg-secondary text-text-secondary border-t border-border mt-20 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        <div>
          <h4 className="font-semibold mb-2">PrathamOne Press</h4>
          <p className="text-text-muted text-sm">Smart publishing systems for authors, educators & small publishers.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="text-sm text-text-muted space-y-2">
            <li><a href="/services">Services</a></li>
            <li><a href="/portfolio">Books</a></li>
            <li><a href="/author-program">Author Program</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-sm text-text-muted">
            press@prathamone.com<br/>AITDL, Mumbai India
          </p>
        </div>
      </div>
      <div className="text-center text-xs mt-16 text-text-muted">© {new Date().getFullYear()} PrathamOne Press • AITDL</div>
    </footer>
  );
}