// ContactForm.js
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const handleSubmit = (e) => {
  e.preventDefault();
  if (!validateEmail(email)) {
    alert("Please enter a valid email.");
    return;
  }
  // proceed with submit actions
};

return (
  <form onSubmit={handleSubmit}>
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Enter your email"
    />
    <button type="submit" disabled={!validateEmail(email)}>
      Submit
    </button>
  </form>
);
