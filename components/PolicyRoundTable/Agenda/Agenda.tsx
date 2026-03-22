import React from "react";
import styles from "./Agenda.module.scss";

const Agenda = () => {
  const agendaList = [
    {
      header: 'opening plenary',
      items: [
        {
          title: 'registration',
          content: {
            name: 'Delegate Arrival & Registration',
            subtext: 'Welcome desk open — name tags, programme kits',
            role: 'Logistics',
          }
        },
        {
          title: 'welcome address',
          content: {
            name: 'Welcome Address',
            subtext: 'Chief Executive Officer, GovTech Africa',
            role: 'Opening',
          }
        },
        {
          title: `host's remarks`,
          content: {
            name: `Host's Remarks`,
            subtext: 'Executive Secretary, National Assembly Library Trust Fund',
            role: 'Opening',
          }
        },
        {
          title: 'keynote address',
          content: {
            name: 'Keynote Address',
            subtext: 'Dr. Bosun Tijani — Minister of Communications, Innovation & Digital Economy',
            role: 'keynote',
          }
        },
        {
          title: 'opening & declaration',
          content: {
            name: 'Opening Address & Official Declaration',
            subtext: 'Rt. Hon. Benjamin Okezie Kalu — Deputy Speaker, House of Representatives',
            role: 'keynote',
          }
        },
      ]
    },
    {
      header: 'GovTech Africa Presentations',
      items: [
        {
          title: 'Outlook Presentation',
          content: {
            name: 'Presentation of GovTech Africa Outlook 2026',
            subtext: 'GovTech Africa Research Team',
            role: 'Report Launch',
          }
        },
        {
          title: 'platform demo',
          content: {
            name: 'Africa GovTech Week 2027 — Fulcrum Platform Demo',
            subtext: 'GovTech Africa',
            role: 'live demo',
          }
        },
        {
          title: `special remarks`,
          content: {
            name: `Special Remarks`,
            subtext: 'The Ambassador, Embassy of Finland in Abuja',
            role: 'Diplomatic',
          }
        },
      ]
    },
  ]
  const cardsList = [
    {
      title: 'Session 1 — Public Sector Panel',
      subtext: 'Digital First Governance: Rethinking How Nigerian Governments Serve, Engage and Deliver.'
    },
    {
      title: 'Session 2 — Private Sector Panel',
      subtext: 'Building the Digital Backbone of Government: Private Sector Innovation and Investment.'
    },
    {
      title: 'Session 3 — Development Partners & Civil Society',
      subtext: 'Aligning Global Expertise and Civic Oversight for Sustainable Digital Governance.'
    },
  ]
  return (
    <section id="agenda" className={styles.agenda_section}>
      <div className={styles.agenda_container}>
        <div className={styles.about_label}>
          {/* <div className={styles.label_line}></div> */}
          <p>programme</p>
        </div>
        <div className={styles.about_text}>
          <h1>Full Event Agenda</h1>
          <h6>
            A structured programme of plenary addresses, keynote delivery, live demonstrations, 
            and three concurrent thematic sessions.
          </h6>
        </div>
        <div className={styles.plenary_container}>
          {agendaList.map((agenda, index) =>
            <div key={index} className={styles.plenary}>
              <div className={styles.title}>
                <h3>{agenda.header}</h3>
              </div>
              {agenda.items.map((item, index) =>
                <div key={index} className={styles.agenda}>
                  <div className={styles.agenda_title}>
                    <h2>{item.title}</h2>
                  </div>
                  <div className={styles.agenda_body}>
                    <h4>{item.content.name}</h4>
                    <p>{item.content.subtext}</p>
                    <div data-role={item.content.role} className={styles.agenda_role}>
                      <h6>{item.content.role}</h6>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        <div className={styles.sessions}>
          <div className={styles.title}>
            <h3>thematic panel sessions</h3>
          </div>
          <div className={styles.cards}>
            {cardsList.map((card, index) =>
              <div key={index} data-index={index} className={styles.card}>
                <h3>0{index + 1}</h3>
                <h6 data-index={index}>{card.title}</h6>
                <p>{card.subtext}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Agenda;