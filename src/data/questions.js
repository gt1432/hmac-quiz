export const questions = [
  {
    id: 1,
    question: "What is the main purpose of a Message Authentication Code (MAC)?",
    options: {
      A: "To compress large files before sending",
      B: "To verify that a message is authentic and unchanged",
      C: "To speed up internet downloads",
      D: "To assign IP addresses to devices"
    },
    correctAnswer: "B",
    explanation: "A Message Authentication Code (MAC) ensures both data integrity and authenticity. It allows the recipient to confirm that the message genuinely originated from the claimed sender and has not been altered or tampered with in transit."
  },
  {
    id: 2,
    question: "Who knows the secret key in an HMAC system?",
    options: {
      A: "Only the sender",
      B: "Only the receiver",
      C: "Both the sender and the receiver",
      D: "Anyone on the internet"
    },
    correctAnswer: "C",
    explanation: "HMAC relies on symmetric cryptography, meaning the secret key is pre-shared and kept secret strictly between both the sender and the receiver. If a third party discovered it, they could forge tags."
  },
  {
    id: 3,
    question: "What does the symbol ⊕ represent in the HMAC formula?",
    options: {
      A: "Addition",
      B: "Multiplication",
      C: "XOR",
      D: "Concatenation"
    },
    correctAnswer: "C",
    explanation: "In cryptographic specifications and RFC 2104, ⊕ represents the bitwise exclusive-OR (XOR) operation, used to combine the normalized secret key with the inner pad (ipad) and outer pad (opad)."
  },
  {
    id: 4,
    question: "What does the symbol || represent in the HMAC formula?",
    options: {
      A: "Parallel processing",
      B: "Concatenation",
      C: "Division",
      D: "Subtraction"
    },
    correctAnswer: "B",
    explanation: "In HMAC notation, the double vertical bar || denotes concatenation (joining two byte strings sequentially together into a single combined payload)."
  },
  {
    id: 5,
    question: "What is the very first step the sender takes during HMAC generation?",
    options: {
      A: "Send the secret key to the receiver",
      B: "Normalize the secret key to the hash block size",
      C: "Encrypt the message with a public key",
      D: "Delete the original message"
    },
    correctAnswer: "B",
    explanation: "The secret key must first match the hash function's block size (e.g., 64 bytes for SHA-256). If it is longer, it is hashed down; if it is shorter, it is zero-padded up to the required block length."
  },
  {
    id: 6,
    question: "What happens if an attacker changes \"₹500\" to \"₹5,000\" in a message protected by HMAC?",
    options: {
      A: "The HMAC tag updates automatically",
      B: "The server ignores the tag",
      C: "The tag no longer matches, so the server rejects the request",
      D: "The message becomes encrypted"
    },
    correctAnswer: "C",
    explanation: "Because the attacker does not have the secret key, they cannot generate a valid tag for the modified \"₹5,000\" payload. When the server recomputes the HMAC, the hashes mismatch and the request is rejected immediately."
  },
  {
    id: 7,
    question: "Why does HMAC use two pads (ipad and opad)?",
    options: {
      A: "To double the size of the original message",
      B: "To separate the inner and outer hash computations",
      C: "To make the secret key public",
      D: "To compress the final tag"
    },
    correctAnswer: "B",
    explanation: "HMAC uses two fixed constant byte pads (ipad = 0x36, opad = 0x5c) to establish two distinct cryptographic passes (inner and outer). This nested structure protects against length-extension attacks common to naive hash MACs."
  },
  {
    id: 8,
    question: "Why does HMAC NOT provide non-repudiation?",
    options: {
      A: "Because it does not use a hash function",
      B: "Because both parties share the same secret key",
      C: "Because the message is always encrypted",
      D: "Because tags are never sent with the message"
    },
    correctAnswer: "B",
    explanation: "Since both sender and receiver possess the exact same shared key, either party has the cryptographic capability to produce a valid HMAC tag. Therefore, neither can prove to an outside third party that the other authored it. Non-repudiation requires asymmetric digital signatures."
  },
  {
    id: 9,
    question: "Which comparison method is recommended when checking HMAC tags to reduce timing-leak risks?",
    options: {
      A: "Alphabetical comparison",
      B: "Constant-time comparison",
      C: "Random comparison",
      D: "Reverse-order comparison"
    },
    correctAnswer: "B",
    explanation: "Standard equality operators fail early on the first mismatched byte, creating timing side-channels. A constant-time comparison inspects all bytes in equal time regardless of differences, preventing timing attacks."
  },
  {
    id: 10,
    question: "Which of the following is a common real-world use of HMAC?",
    options: {
      A: "API request signing",
      B: "Video rendering",
      C: "Photo editing",
      D: "Creating spreadsheet formulas"
    },
    correctAnswer: "A",
    explanation: "HMAC is standard in industry API request authentication (e.g., AWS Signature v4, GitHub & Stripe webhook signatures, JWT HS256) to ensure API calls are authenticated and haven't been tampered with."
  }
];
