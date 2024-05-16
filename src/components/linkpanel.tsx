'use client'

export const LinkPanel = ({link="", title="", description=""})=>{
  return (<a
    href={link}
    className="group rounded-sm border border-transparent p-2 m-2 transition-colors bg-neutral-600/50 hover:border-gray-150 hover:bg-gray-50/30 hover:text-green-950"
    target="_blank"
    rel="noopener noreferrer"
    >
    <h2 className="mb-3 text-2xl font-semibold">
    {title}
    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        -&gt;
    </span>
    </h2>
    <p className="m-0 max-w-[30ch] text-sm opacity-75">
      {description}
    </p>
  </a>);
}
