'use client'
import { useState, useEffect } from 'react'
import Bax from '../components/bax';
import {LinkPanel} from '../components/linkpanel';
import {Slider} from '@mui/material';

export default function Home() {
  const [baxSize,setBaxSize] = useState(40);
  
  return (
    <>
    <Bax baxSize={baxSize} bgSrc={"/images/bg.jpg"} />
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <h1 className="w-full font-black text-center text-4xl text-green-950">
        Christopher Trulove&apos;s Portfolio Playground
      </h1>

      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 p-6 text-black backdrop-blur-2xl lg:static lg:w-auto  lg:rounded-xl lg:border bg-gray-200 lg:p-4">
          Okay so I am just rebuilding this in Next.js at the moment... so it is a mess.
        </p>
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 pb-6 text-black backdrop-blur-2xl lg:static lg:w-auto  lg:rounded-xl lg:border bg-gray-200 lg:p-4">
          My background is a dynamically generated array of boxes that will always fill the viewport... there is a future in its design, hover and motion effects, but for now, enjoy the slider that lets you change the size of the background boxes.
        </p>
      </div>
      <Slider defaultValue={baxSize}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={20}
        max={200}
        onChange={(evt:Event, value:number|number[], thumb:number)=>{setBaxSize((value instanceof Array) ? value[0] : value)}}
        className="w-full max-w-5xl"
      />

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <LinkPanel
          link="/flashcards"
          title="FlashCards"
          description="5/21/24 This is a quick flashcard applet I built in Next (React) during a technical interview."
        />
        <LinkPanel
          link="https://leeduser.buildinggreen.com/credit/NC-v4.1/IPc1"
          title="BuildingGreen"
          description="I managed the original migration of BuildingGreen to Drupal from ColdFusion. Not much of the site still has my obvious fingerprints on it, but some elements, like the Leed certification selector on the top of this page were mine."
        />
        <LinkPanel
          link="https://www.amazon.com/b?ie=UTF8&node=18014079011"
          title="Amazon Pay"
          description="Much of what I did for Amazon was behind the scenes (though my API work for Amazon Pay certain has some visibility [see GitHub]), the work I did for Disaster Relief was probably the most widely used code I&rsquo;ve ever written. Building in the Amazon retail site can be daunting and challenging, but the work I did is still being used years later."
        />
        <LinkPanel
          link="https://www.genealogybank.com/explore/newspapers/all/usa/washington?pq=1&prebuy=no&intver=&CCPRODCODE=&s_trackval=&s_referrer=&s_siteloc=&kbid=69919"
          title="GeneologyBank"
          description="GeneologyBank has likewise changed some since I worked there, but much more of what I built is still in play. The search tools we constructed are still in regular use, and the super annoying nag when you mouse out of the subscription page was all me!"
        />
        <LinkPanel
          link="https://jsfiddle.net/OhkaBaka/04hn1nvu/5/"
          title="Score Fiddle"
          description="A tiny piece of mostly css that I talk about in basically every interview because of its intent and impact on the users, as well as my career. Ask me about it!"
        />
        <LinkPanel
          link="https://jsfiddle.net/OhkaBaka/e60Ld4vn/63/"
          title="RegEx Fiddle"
          description="Lets do some pattern matching! Like JavaScript in the early days, RegEx has always been viewed as 'too obnoxious to be worth it' by many. I find it to be incredibly satisfying and fun to work with. I've beaten every level of https://regexcrossword.com/ and I use it whenever I can."
        />
        <LinkPanel
          link="https://github.com/OhkaBaka"
          title="My GitHub"
          description="The guts of various other projects plus the latest iterations of this site."
        />
      </div>
    </main>
    </>
  );
}
