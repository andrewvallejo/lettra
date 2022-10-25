<img align='left' src="https://user-images.githubusercontent.com/17935770/167260199-2edfda2a-475a-4cb7-8aa9-c787de97ba2b.png" alt="logo" width="150"/>
 
<div align='center'>
 
# Lettra
 
</div> 
 
> [Lettra](https://lettra.vercel.app) is a means for job seekers to reduce the time it takes to write a cover letter by selecting keywords to turn into variables, thus **effortlessly** changing _all_ occurrences of any words. 
<div align='right'>
 
 <sub>**_Application has now reached beta!_**.</sub>

</div>

## Features

- Each word in your
document is
interactable, allowing
you to do more than the
average editor.
Matching wordiables
are all linked to each
other, allowing for
blazingly-fast editing.

- Any text can instantly
become a wordiable
upon being clicked or
wrapped in backslashes

- Any word can become
a wordiable and visa-
versa. All consecutive
matching text will
automatically update
as well.

- Double-click any word
to enable its mini-editor.
Anything you type into
the word's input will
replace all consecutive
terms.

- If a word becomes a
wordiable, then every
matching text in the
document will sync to
the new word color.

- Each type of word has
its own visual effects for
easy identification. Word
tvpes also interact
differentlv when clicked
or when the cursor
hovers over.

<div align='center'>
 
## Demo

![Demo](https://user-images.githubusercontent.com/17935770/197898033-69f35357-39a8-46b8-8565-831e77966407.gif)

 </div>

## Installation

You can visit [Lettra's website](https://lettra.vercel.app) or clone the repo.

1. Clone the repo and update the dependency with your preferred package manager. <sub>(_yarn, pnpm, etc._)</sub>

   ```jsx
   git clone
   npm install
   ```

2. Run the development environment to start the server.

   ```jsx
   npm run dev
   ```

3. Once started, visit [localhost:3000](http://localhost:3000) on your browser.

## Usage

Insert your cover letter and then wrap backslashes (`\`) behind _and_ in front of the words you want to convert into a Wordiable.<sup>(word variable)</sup>

> **For example**: `Dear OmniBark Hirer,` should look like `Dear \OmniBark\ Hirer,`

Do this to each word you would like to swap out for another easily, up to seven unique words.

Every iteration of `\OmniBark\` will now automatically have the corresponding color. The color will automatically change based on the order the Wordiables are seen within the document. <sup>(colors are ROYGBIV)</sup>

In the previous example, every iteration of `\OmniBark\` will turn red. If you were to add a new wordiable anywhere ahead of `\OmniBark\,` then all of the Wordiables will shift colors accordingly.

> **For Example**: `\Dear\ \OmniBark\ Hirer,`

In this example,`\Dear\` (and any of the following iterations of the word) will turn red, and all instances of `OmniBark` will now be orange.

```
 Dear \OmniBark\ Hirer,
 I would love to work at \OmniBark\ because...
```

## Roadmap

- Add localStorage always to have your most recent Cover Letter.
- Add "Paragraphiables" that will hold different variations of your CL.
  - Wordiables will be consistent in each stored paragraph to further increase the efficiency of creating versions of cover letters for when applying to companies with different core values or positions.
- Add 'auto-detect Wordiables' feature that will try and determine which words are the ones the job-seeker would've chosen manually.
- Fully Interactive for Mobile- this won't simply be a smaller editor but one that has mobile-centric design first (no feature will be compromised).

<div align='center'>

## Technologies

<img src="https://img.shields.io/badge/Svelte-FF3E00?logo=svelte&logoColor=fff&style=flat-square" alt="Svelte Badge">
<img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=flat-square" alt="TypeScript Badge">
<img src="https://img.shields.io/badge/Sass-C69?logo=sass&logoColor=fff&style=flat-square" alt="Sass Badge">
<img src="https://img.shields.io/badge/D3.js-F9A03C?logo=d3dotjs&logoColor=fff&style=flat-square" alt="D3.js Badge">

</div>

<br>

<div align="center">

---

### Created by **Andrew Vallejo**

<sub> **04.26.22** -
Hi there! I am creating this application to make developing cover letters as easy as possible. Many would argue that it would take me more time to complete this application than it would simply `CMD+F` and search & replace each occurrence of that word. That may be true to an extent, but this is dependent on how careful you are at editing. The tedious repetition of this task throughout many cover letters increases the likelihood of having a human error; therefore, sending a cover letter with incorrect roles and company names is high. I hope this application instills confidence in job seekers when updating their Cover Letters and convinces the recruiter that the job seeker wrote this letter uniquely just for them!
</sub>

---

Follow me on [Linkedin](https://www.linkedin.com/in/andrewvallejo/)!

Or look at more of my work on [Github](https://www.github.com/andrewvallejo)

</div>
