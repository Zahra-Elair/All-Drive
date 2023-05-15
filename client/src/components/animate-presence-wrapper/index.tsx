import { AnimatePresence } from "framer-motion"

type AnimatePresenceWrapperProps = {
  children: React.ReactNode
}

export const AnimatePresenceWrapper = ({ children }: AnimatePresenceWrapperProps) => {
  return (
    // Enables the animation of components that have been removed from the tree
    <AnimatePresence
      // Disable any initial animations on children that
      // are present when the component is first rendered
      initial={false}
      // Only render one component at a time.
      // The exiting component will finish its exit
      // animation before entering component is rendered
      mode="wait"
    >
      {children}
    </AnimatePresence>
  )
}
