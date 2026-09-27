function Welcome() {
  
    return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",

        background:
          "linear-gradient(135deg, #12002f, #4b006e, #ff1493)",

        color: "white",
        fontFamily: "Arial, sans-serif",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Website Logo */}
      <div
        style={{
          position: "absolute",
          top: "25px",
          left: "30px",

          fontSize: "24px",
          fontWeight: "bold",
          letterSpacing: "3px",

          color: "white",

          textShadow:
            "0 0 10px #00ffff, 0 0 20px #ff00ff",
        }}
      >
        STREAMING DISCO
      </div>

      {/* Welcome Content */}
      <div
        style={{
          textAlign: "center",
          maxWidth: "700px",
          padding: "30px",
        }}
      >
        <h1
          style={{
            fontSize: "52px",
            marginBottom: "20px",
            letterSpacing: "5px",

            textShadow:
              "0 0 10px #00ffff, 0 0 25px #ff00ff",
          }}
        >
          WELCOME
        </h1>

        <h2
          style={{
            fontSize: "28px",
            fontWeight: "normal",
            lineHeight: "1.5",
            marginBottom: "25px",
          }}
        >
          "Your next story is only one play away."
        </h2>

        <p
          style={{
            fontSize: "18px",
            opacity: "0.8",
            lineHeight: "1.6",
            marginBottom: "30px",
          }}
        >
          Lights down. Volume up. Let the streaming begin.
        </p>

        <button
          style={{
            padding: "14px 30px",

            border: "none",
            borderRadius: "25px",

            background: "#ff1493",
            color: "white",

            fontSize: "16px",
            fontWeight: "bold",

            cursor: "pointer",

            boxShadow:
              "0 0 15px #ff1493, 0 0 30px #ff00ff",
          }}
        >
          START WATCHING
        </button>
      </div>

      {/* Decorative Neon Circle */}
      <div
        style={{
          position: "absolute",

          width: "250px",
          height: "250px",

          borderRadius: "50%",

          background: "#00ffff",

          filter: "blur(100px)",

          opacity: "0.25",

          top: "-80px",
          right: "-60px",
        }}
      />

      {/* Decorative Pink Glow */}
      <div
        style={{
          position: "absolute",

          width: "300px",
          height: "300px",

          borderRadius: "50%",

          background: "#ff00ff",

          filter: "blur(120px)",

          opacity: "0.2",

          bottom: "-120px",
          left: "-80px",
        }}
      />
    </div>
  );
}

export default Welcome;

