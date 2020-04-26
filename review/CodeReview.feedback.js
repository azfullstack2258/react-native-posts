/**
 * --------- Review Feedback ---------
 * (Note: All line numbers here are indicating lines of origin App.js.)
 * 1. No consistency in coding style.
 *    - `data` object in Line 20 (App.js) is missing spaces here and there. Actually, it should be defined in other file like mockData.js or something like that.
 *    - Line #32, 33, 44,  45 are missing ';'.
 * 2. Unused code.
 *    - `Components` in Line 1
 *    - `viewRobo` method in Line 31
 *    - `years` in Line 36
 * 3. Bad Coding style
 *    - Line 41 - 43 should be wrapped with ();
 *        robots[index] = (
 *          <View>
 *            ...
 *          </View>
 *        );
 *    - In Line 38, better to use object destructuring; let { robot: theRobot }
 *    - Code from Line 57 - 60 looks messy. <View> should be wrapped with (), missing line breaks, spacing, inline styles, etc.
 * 3. Bad code impacting performance
 *    - Line 37, 40 - 45 should be moved outside of render method.
 *      Means that we should define `robots` in other place of App component like contstructor or componentDidMount.
 *      Also, as an array of element, it should have `key` prop, which should be unique. Let's not use `index` as key prop.
 *      Better to have reusable `Robot` component.
 *    - Inline styles should be got rid of.
 *    - Inline functions in Line 42, 54 should be defined as independent class methods,
 *    and they should be used as event handlers in render method.
 *    - For rendering robots list, it should use `FlatList`
 */
