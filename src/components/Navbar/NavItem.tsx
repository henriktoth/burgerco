function NavItem(props: { href: string, title: string}) {
  return (
    <a
      href={props.href}
      className="outline-2 rounded-4xl mx-3 px-5 py-2 min-w-[120px] text-center hover:bg-white hover:text-amber-400 transition-colors duration-300"
    >
        {props.title}
    </a>
  )
}

export default NavItem