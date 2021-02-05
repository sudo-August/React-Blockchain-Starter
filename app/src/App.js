import React from 'react';
import { DrizzleContext } from '@drizzle/react-plugin';
import { Drizzle } from '@drizzle/store';
import { newContextComponents } from '@drizzle/react-components';
import drizzleOptions from './drizzleOptions';
import './App.css';

const { AccountData, ContractData, ContractForm } = newContextComponents;

const drizzle = new Drizzle(drizzleOptions);

function App() {
  return (
    <DrizzleContext.Provider drizzle={drizzle}>
      <DrizzleContext.Consumer>
        {drizzleContext => {
          const { drizzle, drizzleState, initialized } = drizzleContext;

          if (!initialized) {
            return "Loading..."
          }

          return (
            <div className='section'>
              <h2>Active Account</h2>
              <AccountData 
                drizzle={drizzle}
                drizzleState={drizzleState}
                accountIndex={0}
                units='ether'
                precision={3}
              />
            </div>
          )
        }}
      </DrizzleContext.Consumer>
    </DrizzleContext.Provider>
  );
}

export default App;
