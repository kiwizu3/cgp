import React from "react";

function AboutPage() {
  return (
    <div className="about-page container py-5">
      {/* Profile Section */}
      <section className="mb-5">
        <h2>About Us</h2>
        <h3 className="mt-4">Our Story</h3>
        <p>
          Founded in 2020, Capital Growth Partners emerged from a visionary ambition to position Sri Lanka as a prime
          destination for foreign investments. Recognizing the untapped potential within the local and international
          investment landscape, our founders set out to establish a firm that not only navigates the complexities of
          the financial world but also contributes to the economic growth and prosperity of Sri Lanka. Today, we stand
          as a testament to the power of innovative investment strategies and a steadfast commitment to our mission.
        </p>
        <h3 className="mt-4">Our Mission</h3>
        <p>
          To unlock the potential of investments in Sri Lanka, fostering long-term growth and prosperity for our
          investors and the communities we serve.
        </p>
        <h3 className="mt-4">Our Vision</h3>
        <p>
          To be the leading investment partner in Sri Lanka, renowned for transforming the investment landscape through
          innovation, integrity, and sustainable growth. We envision a future where Capital Growth Partners is at the
          heart of Sri Lanka's rise as a global investment hub, empowering individuals and businesses alike to reach new
          heights of financial success.
        </p>
        <h3 className="mt-4">Our Core Values</h3>
        <ul>
          <li>
            <strong>Innovation:</strong> We constantly seek new and creative investment strategies that set us apart
            and drive superior returns for our investors.
          </li>
          <li>
            <strong>Integrity:</strong> At the core of our operations is a commitment to honesty, transparency, and
            ethical practices, ensuring trust and reliability in every interaction.
          </li>
          <li>
            <strong>Sustainability:</strong> We are dedicated to investment choices that promise long-term growth while
            contributing positively to the environment and society.
          </li>
          <li>
            <strong>Collaboration:</strong> We believe in the power of teamwork and partnership, internally with our
            staff and externally with our investors, to achieve collective success.
          </li>
          <li>
            <strong>Excellence:</strong> Our pursuit of excellence is relentless, striving always to exceed the
            expectations of our clients and stakeholders.
          </li>
        </ul>
      </section>

      {/* Corporate Social Responsibility Section */}
      <section className="mb-5">
        <h3>Our Commitment to Corporate Social Responsibility</h3>
        <p>
          Capital Growth Partners is deeply committed to making a positive impact in the communities we operate in.
          Through various CSR initiatives, we aim to contribute to sustainable development in Sri Lanka, focusing on
          environmental conservation, education, and social welfare projects. We believe that by giving back, we can
          create a brighter, more sustainable future for all.
        </p>
      </section>

      {/* Meet Our Team Section */}
      <section>
        <h3>Meet Our Team</h3>
        <p>
          At the helm of Capital Growth Partners is our esteemed team of seasoned professionals with a diverse array of
          expertise in finance, economics, and strategic planning. Guided by our mission and values, they are committed
          to steering the company towards new milestones of success, ensuring that we remain at the forefront of the
          investment industry in Sri Lanka and beyond.
        </p>
        <h4 className="mt-4">Nipun Samaratunga - Director, Legal Affairs and Administration</h4>
        <p>
          Nipun brings a wealth of experience in legal affairs and administrative management, ensuring that our
          operations are compliant and efficient. His expertise helps navigate the complexities of the legal landscape,
          safeguarding our interests and supporting our strategic initiatives.
        </p>
        <h4 className="mt-4">Dinesh Tennakoon - Director, Operations and Strategic Management</h4>
        <p>
          Dinesh oversees our operations and strategic management, driving the company's growth and efficiency. With a
          keen eye for detail and a strategic mindset, he ensures that our investment strategies are executed
          flawlessly, leading us towards sustained success and innovation.
        </p>
        <h4 className="mt-4">Dr. R H S Samaratunga – Advisor</h4>
        <p>
          Dr. R.H.S. Samaratunga is a distinguished Sri Lankan economist who has held numerous high-profile positions in
          public service since joining the Sri Lanka Administrative Service in 1984. His extensive expertise in managing
          financial affairs has been pivotal to our success.
        </p>
        <h4 className="mt-4">Dr. Ravi Ratnayake – Advisor</h4>
        <p>
          Dr. Ravi Ratnayake is a renowned economist with over four decades of experience in international development
          and economic policy. His visionary leadership and global expertise add immense value to our organization.
        </p>
      </section>
    </div>
  );
}

export default AboutPage;