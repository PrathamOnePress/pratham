
export default function Footer(){
  return (
    <footer className="border-t mt-12" style={{borderColor:'#eef2f6'}}>
      <div className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-6">
        <div>
          <div className="font-semibold text-gray-900">PrathamOne Press</div>
          <div className="text-sm text-gray-600 mt-2">We Build. We Write. We Deliver.</div>
        </div>

        <div className="text-sm text-gray-700">
          <div><strong>Services</strong></div>
          <div className="mt-2">Book Formatting<br/>Cover Design<br/>Publishing Pack</div>
        </div>

        <div className="text-sm text-gray-700">
          <div><strong>Contact</strong></div>
          <div className="mt-2">contact@prathamone.com<br/>Mumbai, India</div>
        </div>
      </div>

      <div className="border-t" style={{borderColor:'#eef2f6'}}>
        <div className="max-w-6xl mx-auto px-6 py-4 text-sm text-gray-500">© {new Date().getFullYear()} PrathamOne Press. All rights reserved.</div>
      </div>
    </footer>
  )
}
