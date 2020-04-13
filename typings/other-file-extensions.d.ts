declare module "*.svg" {
  const content: any
  export default content
}

declare module "*.scss" {
  const content: any
  export default content
}

declare module "*.mdx" {
  const content: any
  export default content
}

declare module "*.md" {
  const content: any
  export default content
}

declare module "typography-theme-wordpress-2016" {
  const content: any
  export default content
}

declare module "@theme-ui/typography" {
  const content: any
  const toTheme: (theme: any) => {}
  export default content
  export { toTheme }
}

declare module "@theme-ui/prism" {
  const content: any
  export default content
}

declare module "mdx-utils" {
  const content: any
  const preToCodeBlock: (
    theme: any
  ) => {
    codeString: string
    language: string
  }
  export default content
  export { preToCodeBlock }
}

declare module "*.png" {
  const value: any
  export default value
}
