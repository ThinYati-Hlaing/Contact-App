import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../../components/ui/table";
import { MdOutlineModeEdit } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";


const DataTableTool = ({ data }) => {
    console.log(data)
    return (
        <div className='lg:w-full  md:w-[450px]'>
            <Table className="mt-5">
                <TableHeader>
                    <TableRow className="bg-basic hover:bg-basic ">
                        <TableHead>No</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Address</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((i) => {
                        <TableRow key={i.id} className=" bg-[#FCFCFD]">
                            <TableCell>{i.id}</TableCell>
                            <TableCell>{i.name}</TableCell>
                            <TableCell>{i.email}</TableCell>
                            <TableCell>{i.phone}</TableCell>
                            <TableCell>{i.address}</TableCell>
                            <TableCell>
                                <button>
                                    <MdOutlineModeEdit />
                                </button>
                                <button>
                                    <FaRegTrashAlt className=' text-danger' />
                                </button>
                            </TableCell>
                        </TableRow>
                        console.log(i);
                    })}

                </TableBody>
            </Table>

        </div>
    )
}

export default DataTableTool