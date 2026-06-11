import { useState, useEffect } from "react";

function ProfileVisit() {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    document.title = `Profile Visits: ${visits}`;
  }, [visits]);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial",
      }}
    >
      <h1>👤 User Profile</h1>

      <h2>Profile Visits: {visits}</h2>

      <button
        onClick={() => setVisits(visits + 1)}
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Visit Profile
      </button>

      {visits >= 5 && (
        <h3 style={{ color: "green" }}>
          ⭐ Popular Profile ⭐
        </h3>
      )}
    </div>
  );
}

export default ProfileVisit;