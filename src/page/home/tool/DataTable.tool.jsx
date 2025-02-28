import React, { useEffect, useState } from 'react'
import toast from "react-hot-toast";
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
import SweetAlert2 from 'react-sweetalert2';
import "sweetalert2/dist/sweetalert2.css";
import { useDeleteMutation } from "../../../store/service/endpoints/contact.endpoint"
import { SheetTrigger } from '../../../components/ui/sheet';
const DataTableTool = ({ apiData, handleEdit }) => {
    const [swalProps, setSwalProps] = useState({});
    const [deleteFun, { data, isLoading, isError }] = useDeleteMutation();

    useEffect(() => { }, [data, isLoading, isError

    ])

    const handleDelete = (id) => {
        setSwalProps({
            show: true,
            title: "Are you sure?",
            text: "You really want to remove this!",
            icon: "warning",
            showCancelButton: true,
            cancelButtonText: "No, cancel",
            confirmButtonText: "Yes, delete it!",
            confirmButtonColor: "red",
            onConfirm: async () => {
                await deleteFun(id);
                toast.success("Contact deleted")
                setSwalProps({
                    show: false,
                })
            },
            onResolve: () => {
                setSwalProps({
                    show: false,
                })
            }
        })
    }

    return (
        <div className='lg:w-full  md:w-[450px]'>
            <Table className="mt-5">
                <TableHeader>
                    <TableRow className="bg-basic hover:bg-basic ">
                        <TableHead className="rounded-l-xl">No</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Address</TableHead>
                        <TableHead className="rounded-r-xl">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {apiData.map((i) =>
                        <TableRow key={i.id} className=" bg-[#FCFCFD]">
                            <TableCell>{i.id}</TableCell>
                            <TableCell>{i.name}</TableCell>
                            <TableCell className=" text-gray-400">{i.email}</TableCell>
                            <TableCell className=" text-gray-400">{i.phone}</TableCell>
                            <TableCell className=" text-gray-400 w-[300px] text-wrap">{i.address}</TableCell>
                            <TableCell className="flex justify-center items-center text-xl space-x-5">
                                <SheetTrigger>
                                    <button onClick={handleEdit.bind(null, i.id)}>
                                        <MdOutlineModeEdit />
                                    </button>
                                </SheetTrigger>
                                <button onClick={handleDelete.bind(null, i.id)}>
                                    <FaRegTrashAlt className=' text-danger' />
                                </button>
                            </TableCell>
                        </TableRow>
                    )}

                </TableBody>
            </Table>
            <SweetAlert2 {...swalProps} />
        </div>
    )
}

export default DataTableTool