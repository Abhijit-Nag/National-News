import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import React from 'react'
import "./accordion.scss"

const Accordian = () => {
    return (
        <div className="container">
            <Accordion className='accordion'>
                <AccordionSummary expandIcon={<Add className='icon' />} className="summary" >
                    What is JMedia ?
                </AccordionSummary>
                <AccordionDetails className='details'>
                    <p>JMedia is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

                        You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
                </AccordionDetails>
            </Accordion>

            <Accordion className='accordion'>
                <AccordionSummary expandIcon={<Add className='icon' />} className="summary" >
                    How much does JMedia cost?
                </AccordionSummary>
                <AccordionDetails className='details'>
                    <p>Watch JMedia on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.</p>
                </AccordionDetails>
            </Accordion>

            <Accordion className='accordion'>
                <AccordionSummary expandIcon={<Add className='icon' />} className="summary" >
                    Where can I watch ?
                </AccordionSummary>
                <AccordionDetails className='details'>
                    <p>Watch anywhere, anytime. Sign in with your JMedia account to watch instantly on the web at JMedia.com from your personal computer or on any internet-connected device that offers the JMedia app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

                        <br />
                        You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take JMedia with you anywhere.</p>
                </AccordionDetails>
            </Accordion>

            <Accordion className='accordion'>
                <AccordionSummary expandIcon={<Add className='icon' />} className="summary" >
                    How do I cancel?
                </AccordionSummary>
                <AccordionDetails className='details'>
                    <p>JMedia is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                </AccordionDetails>
            </Accordion>

            <Accordion className='accordion'>
                <AccordionSummary expandIcon={<Add className='icon' />} className="summary" >
                    What can I watch on JMedia?
                </AccordionSummary>
                <AccordionDetails className='details'>
                    <p>JMedia has an extensive library of feature films, documentaries, TV shows, anime, award-winning JMedia originals, and more. Watch as much as you want, anytime you want.</p>
                </AccordionDetails>
            </Accordion>

            <Accordion className='accordion'>
                <AccordionSummary expandIcon={<Add className='icon' />} className="summary" >
                    Is JMedia good for kids?
                </AccordionSummary>
                <AccordionDetails className='details'>
                    <p>
                        The JMedia Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
                        <br />

                        Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                    </p>
                </AccordionDetails>
            </Accordion>

            <p id='text'>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="input">
                <input type="email" placeholder="Email address" />
                <button className="registerButton">Get Started</button>
            </div>
        </div>
    )
}

export default Accordian