import Image from "next/image";
import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";

interface IAnnouncementProps {
  title: string;
  duration: string;
  hasPin: boolean;
  whichPin: string;
}
const Announcement = ({
  title,
  duration,
  hasPin,
  whichPin,
}: IAnnouncementProps) => {
  return (
    <div className="flex items-center justify-between gap-4 bg-[#FAFAFA] py-3 px-4 border border-[#E0E0E0] rounded-md">
      <div className="space-y-1 w-full">
        <h4 className="font-medium text-secondary-title">{title}</h4>
        <div className="flex justify-between">
          <p className="text-xs text-primary-subtitle">{duration}</p>
          <div className="flex md:hidden items-center gap-6">
            {hasPin && (
              <Image
                src={`/assets/${whichPin}.svg`}
                className="cursor-pointer"
                width={20}
                height={20}
                alt="announcement"
              />
            )}
            <Image
              src="/assets/3-dots.svg"
              className="cursor-pointer"
              width={20}
              height={20}
              alt="announcement"
            />
          </div>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-6">
        {hasPin && (
          <Image
            src={`/assets/${whichPin}.svg`}
            className="cursor-pointer"
            width={20}
            height={20}
            alt="announcement"
          />
        )}
        <Image
          src="/assets/3-dots.svg"
          className="cursor-pointer"
          width={20}
          height={20}
          alt="announcement"
        />
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="mx-8 mt-8">
      <h1 className="text-xl md:text-2xl font-medium mb-5">Dashboard</h1>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="grid grid-cols-6 gap-3 text-tertiary lg:w-3/5">
          <div className="col-span-6 md:col-span-2 flex flex-col gap-3 bg-[#FFEFE7] p-4 rounded-lg ">
            <h2 className=" md:text-lg font-medium">Available Position</h2>
            <h2 className="text-3xl lg:text-4xl font-medium">24</h2>
            <h2 className=" text-sm text-primary">4 Urgently needed</h2>
          </div>
          <div className="col-span-6 md:col-span-2 flex flex-col gap-3 bg-[#E8F0FB] p-4 rounded-lg">
            <h2 className=" md:text-lg font-medium">Job Open</h2>
            <h2 className="text-3xl lg:text-4xl font-medium">10</h2>
            <h2 className=" text-sm text-[#3786F1]">4 Active hiring</h2>
          </div>
          <div className="col-span-6 md:col-span-2 flex flex-col gap-3 bg-[#FDEBF9] p-4 rounded-lg">
            <h2 className=" md:text-lg font-medium">New employees</h2>
            <h2 className="text-3xl lg:text-4xl font-medium">24</h2>
            <h2 className=" text-sm text-[#EE61CF]">4 Department</h2>
          </div>
          <div className="col-span-6 md:col-span-3 grid grid-cols-2  w-full h-48 p-6 border border-muted rounded-lg">
            <div className="flex flex-col justify-between">
              <div className="">
                <h2 className=" md:text-lg font-medium mb-2">
                  Total Employees
                </h2>
                <h2 className="text-4xl lg:text-5xl font-medium">216</h2>
              </div>
              <div className="text-primary-subtitle text-sm">
                <p> 120 Men</p>
                <p> 96 Women</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/assets/chart.png"
                width={3500}
                height={3500}
                className="w-28 h-20 object-cover rounded-lg"
                alt="dashboard"
              />
              <div className="w-content text-center text-sm bg-[#FFEFE7] rounded-md p-2">
                +2% Past Month
              </div>
            </div>
          </div>
          <div className="col-span-6 md:col-span-3 grid grid-cols-2  w-full h-48 p-6 border border-muted rounded-lg">
            <div className="flex flex-col justify-between">
              <div className="">
                <h2 className=" md:text-lg font-medium mb-2">Talent Request</h2>
                <h2 className="text-4xl lg:text-5xl font-medium">16</h2>
              </div>
              <div className="text-primary-subtitle text-sm">
                <p> 6 Men</p>
                <p> 10 Women</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/assets/chart.png"
                width={3500}
                height={3500}
                className="w-28 h-20 object-cover rounded-lg"
                alt="dashboard"
              />
              <div className="w-content text-center text-sm bg-[#FFEFE7] rounded-md p-2">
                +5% Past Month
              </div>
            </div>
          </div>
          <div className="col-span-6 p-4 text-tertiary border border-muted rounded-lg relative h-[340px] md:h-72 lg:h-[340px] overflow-hidden">
            <div className="flex justify-between items-center mb-3">
              <div className="md:text-lg font-medium">Announcement</div>
              <Select defaultValue="apple">
                <SelectTrigger className="w-auto gap-2">
                  <SelectValue placeholder="Select a Date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apple">Today, 13 Sept, 2021</SelectItem>
                  <SelectItem value="banana">Today, 13 Sept, 2021</SelectItem>
                  <SelectItem value="blueberry">
                    Today, 13 Sept, 2021
                  </SelectItem>
                  <SelectItem value="grapes">Today, 13 Sept, 2021</SelectItem>
                  <SelectItem value="pineapple">
                    Today, 13 Sept, 2021
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-3 overflow-hidden">
              <Announcement
                title="Outing schedule for every department"
                duration="5 minutes ago"
                hasPin
                whichPin="pin"
              />
              <Announcement
                title="Meeting HR Department"
                duration="Yesterday, 12:30 PM"
                hasPin
                whichPin="pin2"
              />
              <Announcement
                title="IT Department need two more talents for UX/UI Designer position"
                duration="Yesterday, 9:15 AM"
                hasPin
                whichPin="pin2"
              />
            </div>
            <div className=" border-t border-muted absolute bottom-0 left-0 text-primary w-full text-center text-sm py-3 bg-white cursor-pointer">
              See All Announcements
            </div>
          </div>
        </div>
        <div className="lg:w-2/5 flex flex-col md:flex-row lg:flex-col gap-5">
          <div className=" border border-tertiary rounded-lg bg-tertiary  text-white w-full md:w-2/5 lg:w-full ">
            <p className="text-lg font-medium  px-6 py-4 bg-[#1B204A] rounded-lg">
              Recent Activity
            </p>
            <div className="p-6 ">
              <div className="space-y-2 max-w-[340px] mb-6">
                <p className="text-[10px] opacity-60">
                  10.40 AM, Fri 10 Sept 2021
                </p>
                <p className="">You Posted a new Job</p>
                <p className="text-sm opacity-80 font-light">
                  Kindly check the requirements and terms of work and make sure
                  everything is right.
                </p>
              </div>
              <div className="lg:flex justify-between items-center space-y-3 lg:space-y-0">
                <p className="text-sm font-light">
                  Today you makes 12 Activity
                </p>
                <Button>See All Activity</Button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/5 lg:w-full p-4 text-tertiary border border-muted rounded-lg md:h-[350px] lg:h-[419px] relative overflow-hidden">
            <div className="flex justify-between items-center mb-3">
              <div className="md:text-lg font-medium">Upcoming Schedule</div>
              <Select defaultValue="apple">
                <SelectTrigger className="w-auto gap-2">
                  <SelectValue placeholder="Select a Date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apple">Today, 13 Sept, 2021</SelectItem>
                  <SelectItem value="banana">Today, 13 Sept, 2021</SelectItem>
                  <SelectItem value="blueberry">
                    Today, 13 Sept, 2021
                  </SelectItem>
                  <SelectItem value="grapes">Today, 13 Sept, 2021</SelectItem>
                  <SelectItem value="pineapple">
                    Today, 13 Sept, 2021
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="mb-3 space-y-3">
              <p className="text-sm text-primary-subtitle">Priority</p>
              <Announcement
                title="Review candidate applications"
                duration="Today - 11:30 AM"
                hasPin={false}
                whichPin="pin"
              />
            </div>
            <div className="space-y-3">
              <p className="text-sm text-primary-subtitle">Other</p>
              <Announcement
                title="Interview with candidates"
                duration="Today - 10:30 AM"
                hasPin={false}
                whichPin="pin"
              />
              <Announcement
                title="Short meeting with product designer from IT Department"
                duration="Yesterday, 9:30 PM"
                hasPin={false}
                whichPin="pin2"
              />
              <Announcement
                title="IT Department need two more talents for UX/UI Designer position"
                duration="Yesterday, 9:15 AM"
                hasPin={false}
                whichPin="pin2"
              />
            </div>
            <div className=" border-t border-muted absolute bottom-0 left-0 text-primary w-full text-center text-sm py-3 bg-white cursor-pointer">
              Create a new Schedule
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
