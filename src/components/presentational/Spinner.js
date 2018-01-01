import React from "react";

const Spinner = (props) => {

  console.log("in spinner props", props)

  return (
    <div className="container">
        <div className={`spinner ${props.animate}`}>
          <ol className="wheel age">
            <li className="one">18-19</li>
            <li className="two">20-24</li>
            <li className="three">25-29</li>
            <li className="four">30-34</li>
            <li className="five">35-39</li>
            <li className="six">40-44</li>
            <li className="seven">45-49</li>
            <li className="eight">50-54</li>
            <li className="nine">55-59</li>
            <li className="ten">60-64</li>
          </ol>
          <ol className="wheel ethnicity">
            <li className="one">Asian</li>
            <li className="two">Black</li>
            <li className="three">Mixed</li>
            <li className="four">Other</li>
            <li className="five">White</li>
            <li className="six">Asian</li>
            <li className="seven">Black</li>
            <li className="eight">Mixed</li>
            <li className="nine">Other</li>
            <li className="ten">White</li>
          </ol>
          <ol className="wheel gender">
            <li className="one">Male</li>
            <li className="two">Female</li>
            <li className="three">Male</li>
            <li className="four">Female</li>
            <li className="five">Male</li>
            <li className="six">Female</li>
            <li className="seven">Male</li>
            <li className="eight">Female</li>
            <li className="nine">Male</li>
            <li className="ten">Female</li>
          </ol>
        </div>
        </div>
  )
}

export default Spinner;
