/**
 * PrathamOne Press – Editorial Home (Stable v6)
 * Clean serif + saffron accent + press-grade layout
 */

export default function Home() {
  return (
    <div className="container" style={{ paddingTop: "60px", paddingBottom: "80px" }}>
      
      {/* TITLE */}
      <h1 style={{
        fontSize: "42px",
        fontWeight: 500,
        textAlign: "center",
        marginBottom: "10px",
      }}>
        Press Release Title
      </h1>

      <p style={{
        textAlign: "center",
        color: "#555",
        marginTop: "4px",
        marginBottom: "28px",
      }}>
        News, media assets, and press resources.
      </p>

      {/* BUTTONS */}
      <div style={{ 
        display: "flex", 
        justifyContent: "center",
        gap: "12px",
        marginBottom: "50px",
      }}>
        <a
          href="/api/press-kit"
          className="btn"
          style={{
            background: "#d98528",
            color: "white",
            textDecoration: "none",
            padding: "12px 22px",
            borderRadius: "6px",
            fontSize: "15px",
          }}>
          Download Press Kit
        </a>

        <a
          href="/releases"
          style={{
            padding: "12px 22px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "15px",
            textDecoration: "none",
            color: "#333",
          }}>
          Latest Releases
        </a>
      </div>

      {/* THREE-COLUMN SECTION */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "40px",
        marginTop: "20px",
        marginBottom: "60px",
      }}>

        {/* Latest Book */}
        <div>
          <h3 style={{ fontSize: "18px", marginBottom: "5px", fontWeight: 500 }}>
            Latest Book
          </h3>
          <p style={{ fontSize: "14px", color: "#777" }}>April 15, 2024</p>
          <p style={{ fontSize: "14px", marginTop: "8px", color: "#555" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, edit.
          </p>
        </div>

        {/* Upcoming Event */}
        <div>
          <h3 style={{ fontSize: "18px", marginBottom: "5px", fontWeight: 500 }}>
            Upcoming Event
          </h3>
          <p style={{ fontSize: "14px", color: "#777" }}>May 17, 2024</p>
          <p style={{ fontSize: "14px", marginTop: "8px", color: "#555" }}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit, edit.
          </p>
        </div>

        {/* Media Contact */}
        <div>
          <h3 style={{ fontSize: "18px", marginBottom: "5px", fontWeight: 500 }}>
            Media Contact
          </h3>
          <p style={{ fontSize: "14px", marginTop: "8px", color: "#555" }}>
            jawahar.mallah@gmail.com
          </p>
        </div>

      </div>

    </div>
  );
}
