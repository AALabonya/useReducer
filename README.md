React-এর useReducer হুক ব্যবহারের মাধ্যমে স্টেট ম্যানেজ করার একটি বাংলা উদাহরণ নিচে দেওয়া হলো। এই উদাহরণে আমরা একটি সাধারণ কাউন্টার অ্যাপ্লিকেশন তৈরি করবো যা কাউন্ট বাড়াতে ও কমাতে পারবে।

প্রথমে, আমাদের একটি React কম্পোনেন্ট তৈরি করতে হবে যেখানে আমরা useReducer ব্যবহার করব।

```bash
import React, { useReducer } from 'react';

// initialState
const initialState = { count: 0 };

// reducerFunction
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>counter: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}

export default Counter;
```

উপরে দেওয়া উদাহরণটি ব্যাখ্যা করা হলো:

**InitialState:** initialState হল আমাদের প্রাথমিক স্টেট অবজেক্ট যা count ভ্যালু শূন্য দিয়ে শুরু হয়।

**reducer function:** reducer একটি ফাংশন যা স্টেট আপডেট করার জন্য ব্যবহৃত হয়। এটি দুইটি প্যারামিটার নেয় - বর্তমান স্টেট এবং একটি অ্যাকশন। অ্যাকশন অনুযায়ী এটি নতুন স্টেট রিটার্ন করে।

**useReducer hook:** useReducer হুকটি reducer এবং initialState গ্রহণ করে এবং বর্তমান স্টেট এবং dispatch ফাংশন রিটার্ন করে। dispatch ফাংশনটি অ্যাকশন প্রেরণ করার জন্য ব্যবহৃত হয়।

এই ভাবে, useReducer ব্যবহারের মাধ্যমে আমরা স্টেট পরিচালনা করতে পারি এবং বিভিন্ন অ্যাকশনের ভিত্তিতে স্টেট আপডেট করতে পারি।
