import React from 'react';
import {
    GitHubIcon,
    LinkedInIcon,
    GmailIcon, // Import the GmailIcon
} from '@/components/SocialIcons';
import Link from 'next/link'

const Contact = () => {
    function SocialLink({ icon: Icon, ...props }) {
        return (
            <Link className="group -m-1 p-1" target="_blank" {...props}>
                <Icon className="h-10 w-10 sm:h-6 sm:w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
            </Link>
        )
    }
    return (
        <div className="mt-6 flex gap-6">
            {/* <SocialLink
                href="https://github.com/garciazapiain"
                aria-label="Follow on GitHub"
                icon={GitHubIcon}
            /> */}
            <SocialLink
                href="mailto:juangarciazapiain@gmail.com" // Use the mailto: protocol to open the email client
                aria-label="Send an email"
                icon={GmailIcon} // Use the GmailIcon
            />
            <SocialLink
                href="https://www.linkedin.com/in/juan-garcia-zapiain-532235b9/"
                aria-label="Follow on LinkedIn"
                icon={LinkedInIcon}
            />
        </div>
    );
};

export default Contact;