import Bax from '../components/bax';

export default function Home() {
  return (
    <>
    <Bax bgSrc={"/images/bg.jpg"} />
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 p-6 text-black backdrop-blur-2xl lg:static lg:w-auto  lg:rounded-xl lg:border bg-gray-200 lg:p-4">
          Okay so I am just rebuilding this in Next.js at the moment... so it is a mess.
        </p>
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 pb-6 text-black backdrop-blur-2xl lg:static lg:w-auto  lg:rounded-xl lg:border bg-gray-200 lg:p-4">
          My background is a dynamically generated array of boxes that will always fill the viewport... there is a future in its design, hover and motion effects, but for now. Neat! Boxes!
        </p>
      </div>
  
      <div className="mt-0 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-center w-full font-black text-4xl text-green-950">
        <h1 className="w-full col-span-4">
          Christopher Trulove's Portfolio Playground
        </h1>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://leeduser.buildinggreen.com/credit/NC-v4.1/IPc1"
          className="group rounded-lg border border-transparent p-2 m-2 transition-colors bg-neutral-600/50 hover:border-gray-150 hover:bg-gray-50/30 hover:text-green-950"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            BuildingGreen
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-75">
            I managed the original migration of BuildingGreen to Drupal from ColdFusion. Not much of the site still has my obvious fingerprints on it, but some elements, like the Leed certification selector on the top of this page were mine.
          </p>
        </a>

        <a
          href="https://www.amazon.com/b?ie=UTF8&node=18014079011"
          className="group rounded-lg border border-transparent p-2 m-2 transition-colors bg-neutral-600/50 hover:border-gray-150 hover:bg-gray-50/30 hover:text-green-950"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Amazon Pay
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-75">
            Much of what I did for Amazon was behind the scenes (though my API work for Amazon Pay certain has some visibility [see GitHub]), the work I did for Disaster Relief was probably the most widely used code I&rsquo;ve ever written. Building in the Amazon retail site can be daunting and challenging, but the work I did is still being used years later. 
          </p>
        </a>

        <a
          href="https://www.genealogybank.com/explore/newspapers/all/usa/washington?pq=1&prebuy=no&intver=&CCPRODCODE=&s_trackval=&s_referrer=&s_siteloc=&kbid=69919"
          className="group rounded-lg border border-transparent p-2 m-2 transition-colors bg-neutral-600/50 hover:border-gray-150 hover:bg-gray-50/30 hover:text-green-950"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            GeneologyBank{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-75">
            GeneologyBank has likewise changed some since I worked there, but much more of what I built is still in play. The search tools we constructed are still in regular use, and the super annoying nag when you mouse out of the subscription page was all me!
          </p>
        </a>

        <a
          href="https://jsfiddle.net/OhkaBaka/04hn1nvu/5/"
          className="group rounded-lg border border-transparent p-2 m-2 transition-colors bg-neutral-600/50 hover:border-gray-150 hover:bg-gray-50/30 hover:text-green-950"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Score Fiddle{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-75">
            A tiny piece of mostly css that I talk about in basically every interview because of its intent and impact on the users, as well as my career.
          </p>
        </a>

        <a
          href="https://jsfiddle.net/OhkaBaka/e60Ld4vn/63/"
          className="group rounded-lg border border-transparent p-2 m-2 transition-colors bg-neutral-600/50 hover:border-gray-150 hover:bg-gray-50/30 hover:text-green-950"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            RegEx Fiddle{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-75">
            Lets do some pattern matching!
          </p>
        </a>

        <a
          href="https://github.com/OhkaBaka"
          className="group rounded-lg border border-transparent p-2 m-2 transition-colors bg-neutral-600/50 hover:border-gray-150 hover:bg-gray-50/30 hover:text-green-950"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            GitHub{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-75">
          The guts of various other projects plus the latest iterations of this site.
          </p>
        </a>
      </div>
    </main>
    </>
  );
}
