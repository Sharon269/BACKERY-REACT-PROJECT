import { useState } from "react";

function Subscription() {
  const [plan, setPlan] = useState("Basic");
  const [status, setStatus] = useState(true);

  const upgradePlan = () => {
    if (plan === "Basic") {
      setPlan("Standard");
    } else if (plan === "Standard") {
      setPlan("Premium");
    }
  };

  const pauseSubscription = () => {
    setStatus(false);
  };

  const resumeSubscription = () => {
    setStatus(true);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🎬 Netflix Subscription Dashboard</h1>

      <h2>Plan: {plan}</h2>

      <h3>
        Price: ₹
        {plan === "Basic"
          ? 199
          : plan === "Standard"
          ? 499
          : 649}
        /month
      </h3>

      <h3>Status: {status ? "Active" : "Paused"}</h3>

      <button onClick={upgradePlan}>
        Upgrade Plan
      </button>

      <button
        onClick={pauseSubscription}
        style={{ marginLeft: "10px" }}
      >
        Pause Subscription
      </button>

      <button
        onClick={resumeSubscription}
        style={{ marginLeft: "10px" }}
      >
        Resume Subscription
      </button>

      <br />
      <br />

      {status ? (
        <h2>✅ Enjoy your shows!</h2>
      ) : (
        <h2>❌ Subscription Paused</h2>
      )}

      {plan === "Premium" && (
        <h2>⭐ Ultra HD Enabled</h2>
      )}
    </div>
  );
}

export default Subscription;