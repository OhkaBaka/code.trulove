'use client'
import { useState, useEffect } from 'react'
import Bax from '../components/bax';
import {LinkPanel} from '../components/linkpanel';
import {Slider} from '@mui/material';
import Link from 'next/link';
import { MuiColorInput } from 'mui-color-input'

export default function Home() {
  const [baxSize,setBaxSize] = useState(40);
  const [baxColor,setBaxColor] = useState("rgb(170, 220, 120)");
  
  return (
    <>
    <Bax baxSize={baxSize} baxColor={baxColor} bgSrc={"/images/bg.jpg"} />
    <main className="flex min-h-screen flex-row items-center justify-between p-12">
      <div className="w-1/5 min-h-full p-1">
        <h2 className="font-bold text-lg text-white rounded bg-slate-600 p-2 my-2">Local Examples</h2>
        <Link href="/flashcards" style={{backgroundColor:"rgba(71, 85, 105, .50)"}} className="border rounded border-stone-300 text-stone-300 p-2 mt-2 block hover:bg-slate-600 hover:border-stone-100 hover:text-stone-100">5/21/24 This is a quick flashcard applet I built in Next (React) during a technical interview.</Link>
      </div>

      <div className="w-3/5 min-h-full">
        <h1 className="w-full font-black text-center text-4xl text-green-950">
          Christopher Trulove&apos;s Portfolio Playground
        </h1>
        <div className="w-full">
          <p className="w-full justify-center text-center pb-2 text-green-950">
            Built Using: Next.js - TailWind - Material UI
          </p>
          <p className="w-full justify-center p-2 border text-black backdrop-blur-2xl">
            My background is a dynamically generated array of boxes that will always fill the viewport... there is a future in its design, hover and motion effects, but for now, enjoy the the controls to change the size and color.
          </p>
        </div>
        <Slider defaultValue={baxSize}
          valueLabelDisplay="auto"
          step={10}
          marks
          min={20}
          max={200}
          onChange={(evt:Event, value:number|number[], thumb:number)=>{setBaxSize((value instanceof Array) ? value[0] : value)}}
          className="w-full"
        />
        <MuiColorInput format="rgb" value={baxColor} onChange={(color)=>{setBaxColor(color)}} />
        <div className="mb-32 grid text-center mb-0 w-full grid-cols-4 text-left">
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
      </div>
      <div className="w-1/5 min-h-full p-1">
        <h2 className="font-bold text-lg text-white rounded bg-slate-600 p-2 my-2">Thoughts on this new Portfolio</h2>
          <div style={{backgroundColor:"rgba(71, 85, 105, .50)"}} className="border rounded p-2 mt-2 block border-stone-100 text-stone-100">
            As I build this site out I'm reminded of all the fun things I've built in the distant past that were testbeds or precursors for things I never considered, it might be interesting to take some of those to fruition, just to see if my ideas from years ago might have teeth.
            I added "mui-color-input" to add a color picker to change the background color, and it is WAY cooler than I thought it would be.
          </div>
      </div>

    </main>
    </>
  );
}
