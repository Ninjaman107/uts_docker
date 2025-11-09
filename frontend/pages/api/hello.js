// Local Next API route for compatibility when running frontend standalone
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from frontend API (fallback)' })
}
