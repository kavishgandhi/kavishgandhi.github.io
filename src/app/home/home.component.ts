import { Component, ElementRef, OnInit, ViewChild, Inject, HostListener, ViewEncapsulation } from '@angular/core';
import { defineElement } from 'lord-icon-element';
import lottie from 'lottie-web';
import { DOCUMENT } from "@angular/common";
// import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
// import { ResumeDialogComponent } from '../resume-dialog/resume-dialog.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class HomeComponent implements OnInit {
  list = ['a Computer Scientist', 'a Learner', 'a Developer', 'a Researcher', 'an Engineer']

  @ViewChild("experience")
  sectionExperience!: ElementRef;

  @ViewChild("projects")
  sectionProjects!: ElementRef;

  @ViewChild("journey")
  sectionJourney!: ElementRef;

  @ViewChild("contact")
  sectionContact!: ElementRef;
  
  goToExperience(): void {
    this.sectionExperience.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
  goToProjects(): void {
    this.sectionProjects.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
  goToJourney(): void {
    this.sectionJourney.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
  goToContact(): void {
    this.sectionContact.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
  windowScrolled!: boolean;
  @HostListener("window:scroll", [])
  onWindowScroll() {
      if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
          this.windowScrolled = true;
      } 
      else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
          this.windowScrolled = false;
      }
  }
  scrollToTop() {
      (function smoothscroll() {
          var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
          if (currentScroll > 0) {
              window.requestAnimationFrame(smoothscroll);
              window.scrollTo(0, currentScroll - (currentScroll / 8));
          }
      })();
  }
  panelOpenState = false;
  expansions_experience:expansionPanels[] = [
    {title: 'ML Model helps generate personalized emails', keywords: 'ML-PySpark', 
    summary: 'The very first project that I was tasked with. We had to develop a MultiClass-MultiLabel Classification model which would help in classifying customers into different classes and categories. Depending on the classification the client would then send a personalized email to the customer. Since the number of data points was ~1MN, we decided to use PySpark for fast and distributed processing, and we were able to get ~3% more accuracy than the model built by our seniors'},
    {title: 'Report Generation Script', keywords: 'PySpark-Automation', 
    summary: 'One of the most challenging and the longest project. We were tasked with converting and scaling "R" Report Generation code into some other framework that could handle almost 9x the data and with that save time & effort. Knowing the capabilities of PySpark, we decide to go with that. The data was a combination of e-commerce sites across the world where the client had their products listed in 9 different markets spanning ~30 languages, we had to maintain the data integrity while processing (which "R" could not handle well). An entire service was developed which the client team could use and generate the report in one go rather than running the "R" code on their local system. The service developed was able to save ~9 hours of work and the number of people required to complete the task came down from 4 to 1'},
    {title: 'Retail Product Classification', keywords: 'ML-CV', 
    summary: "The next exciting project that I worked on was that of developing a pilot to detect client-specific retail products from the e-commerce websites' banners. For this task, we tried and were not successful in using the off-the-shelf classification models, since the products were kinda specific to the client. Hence, we researched different models available to use and decided to implement MILDNet, which looked promising. And voila! We had developed a model which could match the products from the banners to the catalog with top-5 accuracy of 87%"},
    {title: 'Naive user can now train their own ML Models', keywords: 'ML-FastAPI-Automation', 
    summary: 'Since we were the R&D team, many client-facing teams would come to us with a request to build a custom ML model for prediction. And to do this every time a dataset changed would be a waste of development time. So, we decided to build a service using which a naive user can train their ML model (without any ML background) with their custom dataset. This was proven to be successful since it saved ~1200 hours of manual work per month'},
    {title: 'Automating manual tasks saves time', keywords: 'Python-Automation', 
    summary: 'One of the always ongoing task(s) that I was assigned was automating the manual work done by other team members using Python. This essentially helped save a lot of work for various client delivery teams'}
  ];
  expansions_projects:expansionPanels[] = [
    {title: 'Generate description of code blocks', keywords: 'NLP', 
    summary: "Increase the performance of PLBART a transformer-based encoder-decoder model with the aim of converting given Java code block into its corresponding English language docstring/description"},
    {title: 'ML Project Idea Generation', keywords: 'NLP', 
    summary: "Implement an NLP model which can generate novel ideas for Machine Learning projects – use transfer learning on a small dataset and generate better and more innovative results/ideas"},    
    {title: 'Visual Imagery', keywords: 'Computer Vision', 
    summary: "Think about an application that can give augmented information about buildings/things which you point at using your phone's camera. That is exactly what this project aims to implement. A small step towards the future of Augmented Reality applications."},
    {title: 'GodsEye', keywords: 'ML-AI', 
    summary: 'Implemented as a challenge for TechGig hackathon (for which we were able to achieve 1st runner-up position). Given a stream of video, we had to detect the total slots in a parking lot and determine using ML models whether it was empty or not, the coordinates, color, and orientation of the car (in filled up slots)'},
    {title: 'Hastakshara', keywords: 'ML-AI', 
    summary: "Detect whether a given signature is forged or true, extremely useful for verifying useful documents. For this project, we decide to implement Capsule networks, newly released at that time with a lot of potentials. Yes, we could have used CNNs but given the disadvantages like max-pooling and spatial feature reduction, it will become easier to forge anyone's signature. We researched about and implemented the CapsNet model using TensorFlow"},
    {title: 'SmartHome', keywords: 'IoT', 
    summary: 'Ever dreamt of controlling things with your mobile or with your app. Well, that was our idea while working on SmartHome, an IoT-based system that would enable people to control the lights, fans, basically anything which can be controlled with switches. And the most amazing part was that the current electrical components need not be changed for installing our system'}
  ];
  expansions_achievements:expansionPanels[] = [
    {title: '1st Runner-Up', keywords: 'ML-AI', 
    summary: 'TechGig Code Gladiators 2019 (for Artificial Intelligence challenge)'},
    {title: 'Finalist', keywords: 'IoT', 
    summary: 'TechGig Code Gladiators 2019 (for the Internet of Things challenge)'},
    {title: 'Finalist', keywords: 'ML-AI', 
    summary: "Axis Bank AI Challenge 2018"},
    {title: 'Winner', keywords: 'AI', 
    summary: 'Coding Culture Hackathon 2.0 (2018) organized by ZKM Karlsruhe (Germany) & Goethe-Institut (Mumbai)'}
  ];
  constructor(@Inject(DOCUMENT) private document: Document) { 
    defineElement(lottie.loadAnimation);
  }
  ngOnInit(): void {
  }
}
class expansionPanels{
  title!: string;
  keywords!: string;
  summary!: string;
}