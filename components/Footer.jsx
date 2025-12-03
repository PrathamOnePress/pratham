
export default function Footer(){
  return (
    <footer className="border-t py-12 text-sm text-gray-600">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between">
        <div>
          <div className="font-semibold">PrathamOne Press</div>
          <div>We Build. We Write. We Deliver.</div>
        </div>
        <div>
          <div>© {new Date().getFullYear()} PrathamOne Press</div>
          <div>Mumbai, India</div>
        </div>
      </div>
    </footer>
  )
}
