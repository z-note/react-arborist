import { Cursor } from "../dnd/compute-drop";
import { ActionTypes } from "../types/utils";
export declare type DndState = {
    dragId: null | string;
    cursor: Cursor;
    dragIds: string[];
    parentId: null | string;
    index: number;
};
export declare const actions: {
    cursor(cursor: Cursor): {
        type: "DND_CURSOR";
        cursor: Cursor;
    };
    dragStart(id: string, dragIds: string[]): {
        type: "DND_DRAG_START";
        id: string;
        dragIds: string[];
    };
    dragEnd(): {
        type: "DND_DRAG_END";
    };
    hovering(parentId: string | null, index: number): {
        type: "DND_HOVERING";
        parentId: string | null;
        index: number;
    };
};
export declare function reducer(state: DndState | undefined, action: ActionTypes<typeof actions>): DndState;
