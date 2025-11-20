import { useState } from "react"

function Contact() {
    const [name, setName] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!subject.trim() && !message.trim()) {
            return
        }

        const recipient = "info@burgerco.hu"
        const body = `Name: ${name}\n\n${message}`
        const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            body
        )}`

        // Open user's email client with prefilled subject & body
        window.location.href = mailto
    }

    return (
        <section id="kapcsolat" className="w-full max-w-4xl mx-auto my-12 px-6 flex flex-col items-center">
            <h1 className="text-4xl font-bold text-center mb-10 uppercase px-10">Get in touch with us</h1>
            <div className="bg-neutral-50 rounded-lg shadow-lg p-6 md:p-10 w-full">
                <h3 className="text-2xl font-bold mb-4">Contact</h3>
                <p className="text-sm text-gray-700 mb-4">Write us a message — we'll try to answer as soon as possible.</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <input
                            className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            aria-label="Name"
                        />
                        <input
                            className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                            placeholder="Subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            type="text"
                            aria-label="Subject"
                            required
                        />
                    </div>

                    <textarea
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
                        placeholder="Your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={6}
                        aria-label="Message"
                        required
                    />

                    <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-600">The email will open in your local email client.</p>
                        <button
                            type="submit"
                            className="bg-amber-400 text-white px-5 py-2 rounded-full hover:bg-amber-500 transition-colors"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
