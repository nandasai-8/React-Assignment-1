import React from 'react'

const Theory = () => {
    return (
        <div className='container'>
            <dt>
                <h2>Theory Questions</h2>
                <h3>1.when happens if you call setstate()inside useeffect() without a dependency array?</h3>
                <p style={{ opacity: "0.5" }}>When you use useEffect without providing a dependency array, it runs after every render of the component.It causes an infinite loop because useEffect runs after every render .</p>
            </dt>
            <dt>
                <h3>2. why canit you use hooks inside loops or conditions?</h3>
                <p style={{ opacity: "0.5" }}>Hooks like useState or useEffect create a “slot” in React’s internal hook list for each call. If you call hooks conditionally or inside loops, the order of these calls can change between renders, causing React to misalign the state or effect with the wrong slot.</p>
            </dt>
            <dt>
                <h3>3.wht happens if you pass empty dependenci array on use effect?</h3>
                <p style={{ opacity: "0.5" }}>
                    When you provide an empty dependency array to useEffect, the effect runs only once, immediately after the component’s first render, also known as the component mount. It does not run again on subsequent renders unless the component is unmounted and mounted again

                </p>
            </dt>
            <dt>
                <h3> 4.differnce b/w use ref() and use state()?</h3>
                <p style={{ opacity: "0.5" }}>
                    <dd><b style={{ textDecorationLine: 'underline' }}>UseState</b><li>Stores state that affects the UI.

                        Updating it triggers a re-render of the component.

                        Ideal for reactive values like counters, form inputs, or toggles.</li></dd>
                    <dd><b style={{ textDecorationLine: 'underline' }}>useref</b><li>Stores a mutable value or a reference to a DOM element.

                        Updating .current does not trigger a re-render.

                        Useful for accessing DOM nodes, keeping timers, or persisting values across renders without affecting the UI.</li></dd>
                </p>
            </dt>
            <dt>
                <h3> 5.What happens if you call setState() inside useEffect() without a dependency array?</h3>

                <p style={{ opacity: '0.5' }}> It causes an infinite loop because useEffect runs after every render.</p>

            </dt>
        </div >
    )
}

export default Theory