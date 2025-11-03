// @ts-nocheck
'use client'
import React from 'react';

export default function Commitments() {
  return (
    <section id="commitments" className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <h2 className="text-3xl font-bold text-white mb-6 text-center">Some Commitments</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Column 1: GitHub stats (stacked) */}
            <div className="flex flex-col space-y-0 h-full items-stretch">
            <a
              href="https://github.com/AlexKalll"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-300 mb-2 text-center hover:underline"
              aria-label="GitHub profile"
            >
              GitHub — AlexKalll
            </a>
            <a
              href="https://github.com/AlexKalll"
              target="_blank"
              rel="noopener noreferrer"
              className="block flex-1 flex items-center w-full"
            >
              <img
                src="https://github-readme-stats.vercel.app/api?username=AlexKalll&show_icons=true&theme=radical"
                alt="GitHub stats"
                className="w-full h-full object-contain rounded-lg shadow-md"
              />
            </a>

            <a
              href="https://github.com/AlexKalll"
              target="_blank"
              rel="noopener noreferrer"
              className="block flex-1 flex items-center w-full"
            >
              <img
                src="https://ghchart.rshah.org/green/AlexKalll"
                alt="GitHub Streak"
                className="w-full h-full object-contain rounded-lg shadow-md"
              />
            </a>
            <p className="mt-2 text-sm text-gray-300 text-center">
              <a
                href="https://github.com/AlexKalll"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-300 hover:underline"
              >
                Explore my GitHub activity heatmap & deeper stats
              </a>
            </p>
          </div>

          {/* Column 2: LeetCode */}
          <div className="flex flex-col h-full items-stretch">
            <a
              href="https://leetcode.com/u/Alexkal/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-300 mb-2 text-center hover:underline"
              aria-label="LeetCode profile"
            >
              LeetCode — Alexkal
            </a>
            <a
              href="https://leetcode.com/u/Alexkal/"
              target="_blank"
              rel="noopener noreferrer"
              className="block flex-1 flex items-center w-full"
            >
              <img
                src="https://leetcard.jacoblin.cool/Alexkal?theme=dark&font=Source%20Code%20Pro&ext=heatmap"
                alt="LeetCode stats"
                className="w-full h-full object-contain rounded-lg shadow-md"
              />
            </a>
            <p className="mt-2 text-sm text-gray-300 text-center">
              <a
                href="https://leetcode.com/u/Alexkal/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-300 hover:underline"
              >
                Explore my LeetCode activity heatmap & deeper stats
              </a>
            </p>
          </div>

          {/* Column 3: Codeforces + link */}
          <div className="flex flex-col h-full items-stretch">
            <a
              href="https://codeforces.com/profile/alexkalalw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-300 mb-2 text-center hover:underline"
              aria-label="Codeforces profile"
            >
              Codeforces — alexkalalw
            </a>
            <a
              href="https://codeforces.com/profile/alexkalalw"
              target="_blank"
              rel="noopener noreferrer"
              className="block flex-1 flex items-center w-full"
            >
              <img
                src="https://codeforces-readme-stats.vercel.app/api/card?username=alexkalalw&theme=github_dark"
                alt="Codeforces stats"
                className="w-full h-60 object-contain rounded-lg shadow-md"
              />
            </a>

            <p className="mt-2 text-sm text-gray-300">
              <a
                href="https://cfviz.netlify.app/?handle=alexkalalw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-300 hover:underline"
              >
                Explore my Codeforces activity heatmap & deeper stats
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
