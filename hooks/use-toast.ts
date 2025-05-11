// This is a simplified toast implementation
export type ToastProps = {
  title: string
  description: string
}

export function toast(props: ToastProps) {
  // This function is not used in the current implementation
  console.log(`Toast: ${props.title} - ${props.description}`)
}
