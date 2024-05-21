"use client";
import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { FAQS_DATA } from "./constant";
export default function Faqs() {
  return (
    <section id="faqs">
      <Accordion.Root>
        {FAQS_DATA.map((faq) => (
          <Accordion.Item value={`value-${faq.id}`} key={faq.id}>
            <Accordion.Header>
              <Accordion.Trigger>
                <span>{faq.title}</span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <p>{faq.content}</p>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
}
