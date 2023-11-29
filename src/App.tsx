import {useState} from 'react';
import './App.css';
import SelectComponent from './components/Select';
import { Option } from './shared/types';

const options: Option[] = [
  { value: 'Businessman', label: 'Businessman' },
  { value: 'Employee', label: 'Employee' },
  { value: 'Freelancer', label: 'Freelancer' },
  { value: 'Retired', label: 'Retired' },
]

const optionsLong: Option[] = [
  { value: 'Businessman', label: 'Businessman Ipsum Losum Something Else An dOthers' },
  { value: 'Employee', label: 'Employee Ipsum Losum Something Else An dOthers' },
  { value: 'Freelancer', label: 'Freelancer Ipsum Losum Something Else An dOthers' },
  { value: 'Retired', label: 'Retired Ipsum Losum Something Else An dOthers' },
  { value: 'Businessman-2', label: 'Businessman Ipsum Losum Something Else An dOthers' },
  { value: 'Employee-2', label: 'Employee Ipsum Losum Something Else An dOthers' },
  { value: 'Freelancer-2', label: 'Freelancer Ipsum Losum Something Else An dOthers' },
  { value: 'Retired-2', label: 'Retired Ipsum Losum Something Else An dOthers' },
  { value: 'Businessman-3', label: 'Businessman Ipsum Losum Something Else An dOthers' },
  { value: 'Employee-3', label: 'Employee Ipsum Losum Something Else An dOthers' },
  { value: 'Freelancer-3', label: 'Freelancer Ipsum Losum Something Else An dOthers' },
  { value: 'Retired-3', label: 'Retired Ipsum Losum Something Else An dOthers' },
  { value: 'Businessman-4', label: 'Businessman Ipsum Losum Something Else An dOthers' },
  { value: 'Employee-4', label: 'Employee Ipsum Losum Something Else An dOthers' },
  { value: 'Freelancer-4', label: 'Freelancer Ipsum Losum Something Else An dOthers' },
  { value: 'Retired-4', label: 'Retired Ipsum Losum Something Else An dOthers' },
]

const optionsDefault: Option[] = [
  { value: 'Businessman', label: 'Businessman' },
  { value: 'Employee', label: 'Employee' },
  { value: 'Freelancer', label: 'Freelancer', default: true },
  { value: 'Retired', label: 'Retired' },
]

function App() {

  const [step, setStep] = useState(0);

  const onChangeHandler = (value: string) => {
    if (value) {
      alert('Selected value: ' + value);
    }
  }

  const nextStep = () => {
    if (step === 9) {
      setStep(0);
    }
    else {
      setStep(step + 1);
    }
  }

  const prevStep = () => {
    if (step !== 0) {
      setStep(step - 1);
    }
  }

  const page1 = (
    <div className="flex flex-col items-center justify-center">
      <div className="demo-container">
        <div className='description-container'>
          <h1 className="text-3xl font-bold mb-4 text-left">Welcome to the SelectComponent showcase!</h1>
          <p>
            The SelectComponent is a custom select component that can be used to replace the default select component.
          </p>
          <p className='mt-4'>
            The feature of this component will be presented in the following steps:
            <ul className='mt-4'>
              <li>
                Demo 1: Basic usage
              </li>
              <li>
                Demo 2: On the edges of the screen
              </li>
              <li>
                Demo 3: On the corners of the screen
              </li>
              <li>
                Demo 4: Long option
              </li>
              <li>
                Demo 5: Options in a flex row
              </li>
              <li>
                Demo 6: Options in a flex column
              </li>
              <li>
                Demo 7: onChange event
              </li>
              <li>
                Demo 8: Default value
              </li>
            </ul>
          </p>
          <p className='mt-4'>
            It is notable that the component has been optimised for accessibility. Please feel free to try it with a screen reader.
          </p>
          <div className='flex flex-row gap-4 justify-end w-full'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={() => setStep(step + 1)}>
              Start!
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const page2 = (
    <div className="flex flex-col items-center justify-center">
      <div className="
      demo-container
      ">
        <div className='description-container'>
          <h1 className="text-3xl font-bold mb-4">Demo 1: Basic usage</h1>
          <div className='text-left mb-4'>
            <p>
              User can pick an item from the option list.
            </p>
          </div>
          <SelectComponent options={options} className="w-full" />
          <div className='flex flex-row gap-4 justify-end w-full'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={prevStep}>
              Back to Home
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={nextStep}>
              Next Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const page3 = (
    <div className="flex flex-col items-center justify-center">
      <SelectComponent options={options} className="sm:block hidden abs-top-center w-[300px]" />
      <SelectComponent options={options} className="sm:block hidden abs-bottom-center w-[300px]" />
      <SelectComponent options={options} className="sm:block hidden abs-center-left w-[300px]" />
      <SelectComponent options={options} className="sm:block hidden abs-center-right w-[300px]" />
      <div className="
      demo-container
      ">
        <div className='description-container'>
          <h1 className="text-3xl font-bold mb-4">Demo 2: On the edges of the screen</h1>
          <div className='text-left mb-4'>
            <p>
              When the select component is on the edge of the screen, they will still display the drop down list properly.
            </p>
            <p className='mt-4'>
              If the element finds itself to be too close to the bottom of the page, its drop down would show on the top of the element.
            </p>
            <p className='sm:hidden block mt-4'>
              This demo is not supported in mobile. Please try it on a desktop.
            </p>
          </div>
          <div className='flex flex-row gap-4 justify-end w-full'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={prevStep}>
              Prev Demo
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={nextStep}>
              Next Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const page4 = (
    <div className="flex flex-col items-center justify-center">
      <SelectComponent options={options} className="sm:block hidden abs-top-left w-[300px]" />
      <SelectComponent options={options} className="sm:block hidden abs-top-right w-[300px]" />
      <SelectComponent options={options} className="sm:block hidden abs-bottom-left w-[300px]" />
      <SelectComponent options={options} className="sm:block hidden abs-bottom-right w-[300px]" />
      <div className="
      demo-container
      ">
        <div className='description-container'>
          <h1 className="text-3xl font-bold mb-4">Demo 3: On the corners of the screen</h1>
          <div className='text-left mb-4'>
            <p>
              When the select component is on the corners of the screen, they will still display the drop down list properly.
            </p>
            <p className='mt-4'>
              If the element finds itself to be too close to the bottom of the page, its drop down would show on the top of the element.
            </p>
            <p className='sm:hidden block mt-4'>
              This demo is not supported in mobile. Please try it on a desktop.
            </p>
          </div>
          <div className='flex flex-row gap-4 justify-end w-full'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={prevStep}>
              Prev Demo
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={nextStep}>
              Next Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );


  const page5 = (
    <div className="flex flex-col items-center justify-center">
      <div className="
      demo-container
      ">
        <div className='description-container'>
          <h1 className="text-3xl font-bold mb-4">Demo 4: Long option</h1>
          <div className='text-left mb-4'>
            <p>
              Sometimes we may have an option list full of options with long texts. The Select Component will display the 
              first several words of the option and add an ellipsis at the end. The number of words to be displayed would 
              be decided by the width of the element.
            </p>
          </div>
          <SelectComponent options={optionsLong} className="w-[300px]" />
          <div className='flex flex-row gap-4 justify-end w-full'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={prevStep}>
              Prev Demo
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={nextStep}>
              Next Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const page6 = (
    <div className="flex flex-col items-center justify-center">
      <div className="
      demo-container
      ">
        <div className='description-container'>
          <h1 className="text-3xl font-bold mb-4">Demo 5: Options in a flex row</h1>
          <div className='text-left mb-4'>
            <p>
              In the case the select component is in a flex row, the drop down list would be displayed in a flex row as well.
            </p>
            <p className='mt-4'>
              It is suggested to add "w-full" class to each of those components to ensure they present with the best layout.
            </p>
            <p className='mt-4'>
              To be noted that this demo has been made responsive and will become flex column when the screen size is small.
            </p>
          </div>
          <div className="flex sm:flex-row flex-col gap-5 w-full">
            <SelectComponent options={options} className="w-full" />
            <SelectComponent options={options} className="w-full" />
            <SelectComponent options={options} className="w-full" />
          </div>
          <div className='flex flex-row gap-4 justify-end w-full'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={prevStep}>
              Prev Demo
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={nextStep}>
              Next Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const page7 = (
    <div className="flex flex-col items-center justify-center">
      <div className="
      demo-container
      ">
        <div className='description-container'>
          <h1 className="text-3xl font-bold mb-4">Demo 6: Options in a flex column</h1>
          <div className='text-left mb-4'>
            <p>
              In the case the select component is in a flex column, the drop down list would be displayed in a flex column as well.
            </p>
            <p className='mt-4'>
              It is suggested to add "w-full" class to each of those components to ensure they present with the best layout.
            </p>
          </div>
          <div className="flex flex-col gap-5 w-full">
            <SelectComponent options={options} className="w-full" />
            <SelectComponent options={options} className="w-full" />
            <SelectComponent options={options} className="w-full" />
          </div>
          <div className='flex flex-row gap-4 justify-end w-full'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={prevStep}>
              Prev Demo
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={nextStep}>
              Next Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const page8 = (
    <div className="flex flex-col items-center justify-center">
      <div className="
      demo-container
      ">
        <div className='description-container'>
          <h1 className="text-3xl font-bold mb-4">Demo 7: onChange event</h1>
          <div className='text-left mb-4'>
            <p>
              User can add a onChange event callback handler to the Select Component to handle the event whenever a new option has been selected.
            </p>
            <p className='mt-4'>
              This page has provided a demo to trigger the function with an alert pop up when the value is changed.
            </p>
          </div>
          <div className="flex flex-row gap-5">
            <SelectComponent options={options} className="w-[300px]"
            onChange={onChangeHandler} />
          </div>
          <div className='flex flex-row gap-4 justify-end w-full'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={prevStep}>
              Prev Demo
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={nextStep}>
              Next Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const page9 = (
    <div className="flex flex-col items-center justify-center">
      <div className="
      demo-container
      ">
        <div className='description-container'>
          <h1 className="text-3xl font-bold mb-4">Demo 8: Default value</h1>
          <div className='text-left mb-4'>
            <p>
              By setting the "default" key of an option to be "true", user can make the option to be the default value of the select component.
            </p>
            <p className='mt-4'>
              If multiple options with "default" key set to be "true", the first one would be selected.
            </p>
            <p className='mt-4'>
              In this case, "Freelancer" is the default value.
            </p>
          </div>
          <div className="flex flex-row gap-5">
            <SelectComponent options={optionsDefault} className="w-[300px]" />
          </div>
          <div className='flex flex-row gap-4 justify-end w-full'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={prevStep}>
              Prev Demo
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={nextStep}>
              Finish
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const pageEnd = (
    <div className="flex flex-col items-center justify-center">
      <div className="
      demo-container
      ">
        <div className='description-container'>
          <h1 className="text-3xl font-bold mb-4">Thank you for your time!</h1>
          <div className='text-left mb-4'>
            <p>
              This is the end of the showcase. Thank you for your time!
            </p>
            <p className='mt-4'>
              You may try again by clicking the button below.
            </p>
            <p className='mt-4'>
              It is notable that the component has been optimised for accessibility. Please feel free to try it with a screen reader.
            </p>
          </div>
          <div className='flex flex-row gap-4 justify-end w-full'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={nextStep}>
              Back to the beginning
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="App">
      {step === 0 && page1}
      {step === 1 && page2}
      {step === 2 && page3}
      {step === 3 && page4}
      {step === 4 && page5}
      {step === 5 && page6}
      {step === 6 && page7}
      {step === 7 && page8}
      {step === 8 && page9}
      {step === 9 && pageEnd}
    </div>
  );
}

export default App;
