### useReducer

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

## Action and payload

অ্যাকশন এবং পেলোড React এর useReducer হুক ব্যবহারের সময় স্টেট ম্যানেজমেন্টের ক্ষেত্রে গুরুত্বপূর্ণ ভূমিকা পালন করে। এই দুটি উপাদান কী এবং কীভাবে কাজ করে তা বিস্তারিতভাবে ব্যাখ্যা করা হলো।

অ্যাকশন (Action)
অ্যাকশন একটি অবজেক্ট যা স্টেট ম্যানেজমেন্টে নির্দিষ্ট পরিবর্তনের নির্দেশ দেয়। প্রতিটি অ্যাকশন অবজেক্টে সাধারণত একটি type প্রপার্টি থাকে, যা নির্দেশ করে যে অ্যাকশনটি কী ধরনের পরিবর্তন ঘটাবে।

**উদাহরণ:**

```bash
{ type: 'increment' }
{ type: 'decrement' }
```

**পেলোড (Payload)**

পেলোড একটি ঐচ্ছিক প্রপার্টি যা অ্যাকশন অবজেক্টে অতিরিক্ত ডেটা প্রেরণের জন্য ব্যবহৃত হয়। পেলোডের মাধ্যমে আমরা নির্দিষ্ট ডেটা বা মান অ্যাকশনের সাথে যুক্ত করতে পারি যা রিডিউসার ফাংশনে প্রয়োজন হতে পারে।

**উদাহরণ:**

```bash
{ type: 'add', payload: 10 }
{ type: 'subtract', payload: 5 }
```

উদাহরণ সহ বিস্তারিত ব্যাখ্যা
নিচে একটি উদাহরণ দেয়া হলো যেখানে অ্যাকশন এবং পেলোড উভয়ই ব্যবহৃত হয়েছে:

```bash
import React, { useReducer } from 'react';

// প্রাথমিক স্টেট
const initialState = { count: 0 };

// রিডিউসার ফাংশন
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'add':
      return { count: state.count + action.payload };
    case 'subtract':
      return { count: state.count - action.payload };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>1 Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>1 Decrement</button>
      <button onClick={() => dispatch({ type: 'add', payload: 5 })}>5 Addition</button>
      <button onClick={() => dispatch({ type: 'subtract', payload: 3 })}>3 substraction</button>
    </div>
  );
}

export default Counter;
```

**উদাহরণটির ব্যাখ্যা:**

**Initial State:** initialState হিসাবে { count: 0 } নির্ধারণ করা হয়েছে।

**Reducer Function:** reducer ফাংশনটি বিভিন্ন অ্যাকশন টাইপ অনুযায়ী স্টেট আপডেট করে।

এই উদাহরণে, অ্যাকশন টাইপের মাধ্যমে কোন ধরণের পরিবর্তন ঘটবে তা নির্ধারণ করা হয় এবং পেলোডের মাধ্যমে অতিরিক্ত ডেটা পাঠানো হয় যা রিডিউসার ফাংশনে ব্যবহৃত হয়। এইভাবে, আমরা অ্যাকশন এবং পেলোড ব্যবহার করে সহজে এবং কার্যকরভাবে স্টেট ম্যানেজ করতে পারি।
