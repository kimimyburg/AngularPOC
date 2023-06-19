## Documentation
NX - `https://nx.dev/`  
NGRX - `https://ngrx.io`  
Angular - `https://angular.io/`  
Tailwind CSS - `https://tailwindcss.com`  
Ng-Openapi-Gen - `https://github.com/cyclosproject/ng-openapi-gen#readme`  
D3 - `https://d3js.org`  
RXJS - `https://rxjs.dev`  

## Before you begin
Globally install nx to be able to run application  
`npm install --global nx@latest`  

## Start the app 
To start the development server run `nx serve AtlanticaVentures`. Open your browser and navigate to http://localhost:4200/. Happy coding!

## Generate code
Create new component: `nx g @nx/angular:component my-component`  
Create store `nx g @nx/angular:ngrx products --directory +state/products --no-interactive --facade`  
## Running tasks  

To execute tasks with Nx use the following syntax:  

```
nx <target> <project> <...options>  
```

You can also run multiple targets:  

```
nx run-many -t <target1> <target2>  
```

..or add `-p` to filter specific projects  

```
nx run-many -t <target1> <target2> -p <proj1> <proj2>  
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/core-features/run-tasks).  

## Want better Editor Integration?  
 
Have a look at the [Nx Console extensions](https://nx.dev/nx-console). It provides autocomplete support, a UI for exploring and running tasks & generators, and more! Available for VSCode, IntelliJ and comes with a LSP for Vim users.  

## Ready to deploy?  

Just run `nx build demoapp` to build the application. The build artifacts will be stored in the `dist/` directory, ready to be deployed.  

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/core-features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/core-features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

## Connect with us!

- [Join the community](https://nx.dev/community)
- [Subscribe to the Nx Youtube Channel](https://www.youtube.com/@nxdevtools)
- [Follow us on Twitter](https://twitter.com/nxdevtools)
