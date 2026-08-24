# Conversation Transcript: Schema Markup & Trademark Fair Use

## Topic 1: Using Competitor Names in JSON-LD Schema
**User:** in json-ld you put in company bane and alternative company name. What happens if alternative company name is that of a competitor?

**AI:** Using a competitor's name as an alternative company name in JSON-LD is a form of keyword stuffing and metadata deception. Search engines view this as a manipulation tactic. It violates structured data guidelines and can lead to a manual penalty or the removal of rich results.

### What Search Engines Do
* **Ignore the Data:** Algorithms often recognize the mismatch between your actual domain, brand, and the competitor's name, choosing to completely ignore the false alternative name.
* **Drop Rich Snippets:** Your structured data may become invalid or untrusted, meaning you lose special search display features.
* **Apply Penalties:** Search engines like Google may penalize the site for trying to trick the search system. Your real pages might drop in rank.

### Best Practices
* **Use Real Names Only:** List only legitimate legal names, DBA names (doing business as), or well-known acronyms of your own brand.
* **Keep It Accurate:** Ensure every field in your JSON-LD code matches the actual content visible on your web page.

---

## Topic 2: Disclosing Historical Product Lineage After a Sale
**User:** I developed an online product that had my name a few more words. I sold it in 2015 and the buyer closed down the website and the whole effort in 2020. I now have a similar product under a different name. Is it ok to mention the historical lineage as long as I don't claim ownership of the closed down website?

**AI:** Yes, it is entirely acceptable to mention your historical lineage. Sharing your professional background and past creations builds strong authority and trust with your audience. However, you must handle the naming and legal boundaries carefully to protect your new business. 

### Best Practices for Sharing Your History
* **Focus on your personal role:** Frame the history around *your* experience as the original creator or developer, rather than focusing on the old brand itself.
* **State the timeline clearly:** Use explicit dates (e.g., "Created by [Your Name] in 2015, later acquired...") to show a transparent timeline.
* **Clarify current status:** Explicitly mention that the previous product was retired in 2020 and that your new venture is completely separate.

### Risks to Avoid
* **Review past contract terms:** Check your 2015 sale agreement for any non-compete clauses, non-disclosure agreements (NDAs), or restrictions on using the old product's name for marketing.
* **Avoid trademark infringement:** Even if the old website is closed, the buyer might still own the trademark rights to that specific name. Use the old name purely for factual, historical context.
* **Skip structured data mentions:** Do not put the old product or company name into your new website's JSON-LD or schema markup. Search engines may flag it as deceptive metadata.

---

## Topic 3: Nuances of Personal Names, Trademarks, and Revenue Weight
**User:** the buyer filed my last name as a trademark and mention the former online product in words, but not name. My name was also in the name of the parent company they bought which had other activities too (>90% of revenue compared to the website <10%)

**AI:** Yes, it is legally safe to mention your history under these conditions. Because the website and the former product are closed down, your intended path—**mentioning the former online product in descriptive words rather than its specific brand name**—avoids trademark infringement. 

### Why You Are Legally Safe
* **Nominative Fair Use:** Trademark law permits you to use words factually to describe past employment, historical timelines, and personal professional background. It only forbids using a mark to deceive customers into thinking your new product *is* the old product, or that your new company is endorsed by the trademark owner.
* **No "Likelihood of Confusion":** Because the previous product was retired in 2020, there is no active product in the market. Describing a historical, defunct project in plain sentences creates no consumer confusion.
* **Describing Your Own Work:** You are describing *what you built*, which is a statement of factual historical lineage, not an attempt to hijack their current business assets.

### The Last Name & Parent Company Nuance
The fact that the buyer trademarked your last name, and that your name was in the parent company they bought (which derived 90%+ of its revenue from other activities), actually works in your favor:
* **Industry and Class Restrictions:** Trademarks are narrow; they only protect a name within specific "classes" of goods and services. If they filed a trademark for your last name based on the parent company's *other* activities (the 90% revenue side), that trademark likely does not even cover the niche of your online product. 
* **The "Right to One's Own Name":** While you cannot use your last name as a *brand name* for your new product if they own a conflicting trademark in that space, they cannot legally stop you from using your own legal name on your "About Me" page to state your biography or credentials.

### How to Safely Phrase It
To stay perfectly safe, keep the mention purely biographical. 
* **Safe:** *"In 2015, our founder [Your Name] successfully developed and sold an automated logistics platform, which operated until 2020. Pulling from that historical lineage, we built this new product..."*
* **Unsafe:** Using the old product's exact name in headers, taglines, or meta descriptions to siphon search traffic.

---

## Topic 4: Distinct Branding and NICE Class Separation (IC 35 vs. IC 36)
**User:** We have different name that has nothing to do with me. IT is IC 35. The old web product is IC 36

**AI:** **Yes, this makes your legal position significantly stronger.** The distinction between **Class 35** (Advertising, Business Management, and Office Functions) and **Class 36** (Financial and Real Estate Services) provides strong protection against trademark infringement claims.

Trademark protection is strictly tied to specific International Classes (NICE classification). Because your new product operates under a completely distinct brand name and in a different class, the risk of a trademark dispute is minimal.

### Why the Class Difference Protects You
* **Different International Classes (IC 35 vs. IC 36):** Trademark rights do not grant universal ownership of a word; they only protect against consumer confusion within related markets. A registration in Class 36 generally cannot block a distinct brand operating in Class 35.
* **Distinct Brand Identity:** Because your new brand name has nothing to do with your personal name or the old brand, there is no visual, phonetic, or conceptual similarity to trigger a "likelihood of confusion" claim.
* **Factual Fair Use on Your Bio:** You have an absolute right to state your factual resume on your website's "About" or "Team" page (e.g., *"Founder [Your Name] previously developed and sold a [Class 36 service/software] platform in 2015..."*).

### Best Practices to Maintain Clear Separation
* **Keep the History in the Biography:** Place any mention of your past product in narrative body copy (such as an "About the Founder" or "Our Story" section). Avoid putting the old description in your homepage headline, meta title tags, or structured data (JSON-LD).
* **Describe the Function, Not the Old Trademark:** As you planned, describe the nature of what you built (e.g., *"a real-time valuation engine"* or *"a financial analytics tool"*) rather than leaning on the old registered mark.
* **Ensure Expired Obligations:** Verify that any non-compete agreements or restrictive covenants from the 2015 sale have formally lapsed (most non-competes expire within 2 to 5 years).