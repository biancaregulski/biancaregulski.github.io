import { MutableRefObject, ReactNode, useRef } from "react";
import ContactContainer from "./contact-container";

const Resume = () => {

    const buildResumeSection = (institution: string, city: string, dateRange: string, position?: string): ReactNode => {
        return (
            <div className="resume-section">
                <div className="resume-section-summary">
                    <b>{institution}</b>
                    <b>•</b>
                    {city}
                    {position ? (
                        <>
                            <b>•</b>
                            <i>{position}</i>
                        </>
                    ) : ""}
                </div>
                <div className="resume-date">
                    {dateRange}
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="resume-download">
                <a href={require("../assets/bianca_regulski_resume.pdf")} download="myFile">
                    Download resume as PDF
                </a>
            </div>
            <p>Full-Stack Software Engineer with three years of professional experience in Ruby, Java, and React. Adept at analytical problem solving and creating engaging, intuitive user experiences.</p>
            <p className="resume-header">Experience</p>
            {buildResumeSection("Validity", "Boston, MA", "January 2021 — Present", "Software Engineer")}
            <p>
                <ul>

                    <li>Led the development and deployment of a new, backwards-compatible version of an email verification RESTful API with robust automated unit and integration testing, improving response times and ensuring continuous uptime for tens of thousands of users.</li>
                    <li>Implemented the front-end and back-end of an inter-account credit transfer system in Ruby on Rails, improving organizational efficiency and speed by automating work that was previously handled manually by non-technical employees.</li>
                    <li>Integrated Validity's email validation API into a widget in the Salesforce app, with automatic importation of Salesforce accounts in Validity’s internal account system, increasing Validity sales among Salesforce users.</li>

                </ul>
            </p>

            {buildResumeSection("Validity", "Boston, MA", "August 2020 — December 2020", "Co-op Software Engineer")}
            <p>
                <ul>
                    <li>Collaborated with a large agile team to migrate a legacy codebase from VB .NET to Java Spring/React, resulting in a modernized user experience, faster performance, and expanding to Mac compatibility.</li>
                    <li>Enhanced front-end design by developing responsive UIs with a focus on intuitive navigation and optimized website performance.</li>
                    <li>Optimized loading times for Liquibase queries with indexing, resulting in decreased page loading times by 30% for APIs pulling large numbers of records.</li>

                </ul>
            </p>


            <p className="resume-header">Skills</p>
            <p>Ruby | Rails | Python | Java | React | TypeScript | JavaScript | Android | SQL | Git</p>

            <p className="resume-header">Education</p>
            {buildResumeSection("Florida State University", "Tallahassee, FL", "August 2016 — May 2020")}
            <p>Bachelor's in Computer Science • Minor in Philosophy</p>
            <ContactContainer />
        </>
    );
};

export default Resume;