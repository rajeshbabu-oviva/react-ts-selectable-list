# react-ts-selectable-list

A React-TS application created without the help of CRA(Create React App)

# Information regarding tech-stack and architecture

The reference for the tech-stack and the application architecture can be found on these articles that I wrote previously-

https://medium.com/gitconnected/building-a-scalable-and-modular-architecture-for-react-ts-applications-e1d917250e04

https://medium.com/@rajeshdavid/a-quick-guide-to-choosing-a-robust-frontend-tech-stack-1f47c0458f08

# How to run ?

- npm run install
- npm run serve

# Design decisions

- Chakra-ui is used for rapid UI development.
- Component composition to avoid unnecessary re-renders.
- Only components connected to an updated state re-renders(Verify the console.logs for more information).
