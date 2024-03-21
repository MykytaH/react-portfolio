export default function Education() {
  return (
    <>
      <div
        class="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0  md:grid-cols-4"
        id="education"
      >
        <div class="col-span-1 flex justify-center md:justify-start">
          <div class="relative h-max">
            <h2 class="text-xl font-bold uppercase ">Education</h2>
            <span class="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
          </div>
        </div>
        <div class="col-span-1 flex flex-col md:col-span-3">
          <div class="flex flex-col pb-8 text-center last:pb-0 md:text-left">
            <div class="flex flex-col pb-4">
              <h2 class="text-xl font-bold">Masters in Beer tasting</h2>
              <div class="flex items-center justify-center gap-x-2 md:justify-start">
                <span class="flex-1 text-sm font-medium italic sm:flex-none">
                  Clown college
                </span>
                <span>•</span>
                <span class="flex-1 text-sm sm:flex-none">April 2007</span>
              </div>
            </div>
            <p>
              Describe your experience at school, what you learned, what useful
              skills you have acquired etc.
            </p>
          </div>
          <div class="flex flex-col pb-8 text-center last:pb-0 md:text-left">
            <div class="flex flex-col pb-4">
              <h2 class="text-xl font-bold">What did you study 101</h2>
              <div class="flex items-center justify-center gap-x-2 md:justify-start">
                <span class="flex-1 text-sm font-medium italic sm:flex-none">
                  School of Business
                </span>
                <span>•</span>
                <span class="flex-1 text-sm sm:flex-none">March 2003</span>
              </div>
            </div>
            <p>
              Describe your experience at school, what you learned, what useful
              skills you have acquired etc.
            </p>
          </div>
        </div>
      </div>
      {/* <h2 className="" id="education">Education</h2>
      <ul>
        <li>High school: Severodonetsk liceum, Faculty of math and physics</li>
        <li>
          1st Bachelor deegre: Ukrainian national university of Kharkiv, Faculty
          of cosmical teht, spetiality of system analisys
        </li>
        <li>
          2nd Bachelor deegre: University of Luhansk by the name of Vladimir
          Dahl, Faculty of Applied Mathematics and Programming
        </li>
        <li>Python course by Beetroot Academy</li>
        <li>
          <a href="https://udemy.com/course/the-complete-web-development-bootcamp">
            WEB development course by Udemy Academy
          </a>
        </li>
      </ul> */}
    </>
  );
}
