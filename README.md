# DIDIT - Week 11 Assignment

(„• ᴗ •„) telling myself I can do this and I can do it with CONFIDENCE. and I DID!

My first step (once forked and cloned) was to deploy on Vercel, although I knew it wasn't working I hoped that the failure message could give me an idea of why. Fixing the deployment was easier than I feared it would be, although I changed the schema instructions (including if not exists in the CREATE commands).

While creating my database in the SQL editor I could see the commented out attempt at creating a "one vote per user" policy and then corrected it using the following:

_ALTER TABLE votes ADD CONSTRAINT unique_vote_per_user_per_post UNIQUE (post_id, user_id)_

This worked and a user is only able to vote once, and has to undo their vote if they want to vote again.

My next stretch goal was to work on the error message that would show when a user who wasn't logged in tried to vote. Keeping scalability in mind, I felt that the best way to handle this would be to create a custom "log in" page (much like the login page from my Week09 assignment) that could then be reused for any action that would require a user to be logged in, especially if the team later decided you could not view any posts without being logged in etc.

When I got this working, I then created a custom "Not Found" page, as I had one of those in previous assignments too, and I felt that it fit in the scope of customising error messages.

Now for: the TipTap chronicles. Although I got the rich-text component working, and fixed the issues where clicking one button on the rich-text formatting would trigger the entire form to submit. This was fixed by giving each button a type of "button" and giving the button on the form the type of "submit". Although I got this working locally, I could not figure out how to allow the content of the tiptap editor to become the content submitted to the database -- I had ideas, such as passing it out of the component as props using the "currentContent" although I was hesitant to really mess around with it as I still didn't have the 100% understanding of the building of the tiptap component and didn't want to break everything in a way that I couldn't then fix.
Thanks to this, I commented out the tiptap component, but it remains in my project as a memory... given that installing it was easy, I will do my own research and watch youtube walkthroughs of people building forms using the component and add it to my own apps! Originally I had a static page that would just display the tiptap component, although this was causing an issue with my Vercel deployment and exceeding the call stack size (I suspect from moving from server/client/server in an inelegant way). 

I could not meet all the stretch goals for this project, although I hope that what I have done satisfies the criteria! I did spend a siginificant portion of the day working with and reading the documentation for tiptap, as this was the only entirely new requirement asked of us by the stretch goals. It's really allowed me to realise that my growing confidence in SQL is backed up by my ability to understand what is needed in a project / for a feature, and that my understanding of apps in general has grown.
