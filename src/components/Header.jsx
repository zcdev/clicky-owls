import { motion, AnimatePresence } from 'framer-motion'

export default function Header({ message }) {
    return (
        <header className="header">
            <h1>Clicky Owls</h1>
            <h2>Try to click all the owls without clicking twice.</h2>
            <motion.p
                key={message} // forces re-animation on text change
                className="message"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4 }}
                aria-live="polite">
                <span className="owl">🦉✨</span> {message}
            </motion.p>
        </header>
    )
}