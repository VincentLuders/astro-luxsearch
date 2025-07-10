

- White Flashing
When clicking from opportunities to hire talent and vice versa, I can see on the background and the logo for example that there is still a quick but smooth white flashing. 

but the everthing should continue as it is (beside the cards from teh menu that change obviously):

The background animation should really continue without interruptions or flashing etc..  

Please read the read me first and then lookup astro documentation on why our implementation is causing this.

- The animation on the when hovering over the job-tag is instant. I don't know why.f

- No matter what, I can't change the color from the profile-name
 to the gradient

-  Job description Issue abrupt ending
    Ok, nice it's not dark anymore.

    But: The blurring looks kind of bad because it's not a transient blur—it's from one moment   
    to the next. Right now, the job card enlarges and remains very transparent, and right after  
    it reaches full size, the background becomes blurry.

    Instead, it should become more and more blurry simultaneously as the expansion progresses.

    Please think through why that might happen and find a reliable way to achieve what I   
    described.

    Please look at the possible code and rethink in general how we implemented it (if we did) 
    because from the ground up it might not have worked out, and you must take another approach.

    Again, look at our architecture described in @README.md.
    And look up online @Web for the right documentation for our code and check if anything is 
    different with Astro.


- Vincent Lüders - Doesn't work this shit
	"Vincent Lüders" on the about us card doesn't work with the gradient colors. A junior dev tried to change its color but it eventually only looks blue.  
	  
	You can take the exact same gredient color logic that we use for "class="brand-tagline" . Please look it up!  
	  
	And the Quote border line doesn't use the gradient colors either.  
	  
	You must place the colors vertical, from top to bottom blue to purple to blue.    
