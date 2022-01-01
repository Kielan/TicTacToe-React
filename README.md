## Tic-Tac-Toe Challenge

2 player Tic-Tac-Toe React Component bootstrapped on Nextjs Styled Components and CSS Grid layout code style challenge.

Helpers

initialPlayerOptionXorO - choose "x" or "o" as Marker randomly
equals3 - (a, b, c) => return a == b && b == c && a != ""
handleWinner - check if 3 horiz, vert or diag Markers return false or true. "x" or "o"

Hooks 

MarkerList - The area of play for the Tic-Tac-Toe game.
Marker - The player and designated symbol on the grid
GameWinner - The State switching mechanism for The UI Screen

Buttons

handleClick - 
	- Check if Marker designated <div /> is occupied otherwise place marker
	- check if no null in MarkerList (tie)
	- handleWinner() check 3 Markers in the list are of same suit
	- set game winner					 
handleReset -  
	- set MarkerList to Array of null
	- set Marker initialPlayerOptionXorO

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
